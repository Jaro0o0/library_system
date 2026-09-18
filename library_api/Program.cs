using Microsoft.EntityFrameworkCore;
using Backend.Data;
using DotNetEnv;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Library_Api.Services;

Env.Load();

var builder = WebApplication.CreateBuilder(args);

builder.Configuration["AllowedHosts"] = 
    Environment.GetEnvironmentVariable("ALLOWEDHOSTS");


builder.Services.AddOpenApi();
builder.Services.AddControllers();


//Custom Setvies
builder.Services.AddScoped<RecommendService>();
builder.Services.AddScoped<SearchBookService>();
builder.Services.AddScoped<RentBookService>();



//DATABASE
var envHost = Environment.GetEnvironmentVariable("DB_HOST");
string connectionString =
        $"Host={envHost};" +
        $"Port={Environment.GetEnvironmentVariable("DB_PORT")};" +
        $"Database={Environment.GetEnvironmentVariable("DB_NAME")};" +
        $"Username={Environment.GetEnvironmentVariable("DB_USER")};" +
        $"Password={Environment.GetEnvironmentVariable("DB_PASSWORD")}";



builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(connectionString));




//CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReact", policy =>
    {
        policy
            .WithOrigins("http://localhost:5173")
            .AllowAnyHeader()
            .AllowAnyMethod();
         
    });
});



//Auth
builder.Services.AddScoped<JwtService>();
builder.Services.AddSingleton<PasswordService>();


builder.Services.AddAuthorization();
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer( options =>
{
    options.RequireHttpsMetadata = false;
    options.SaveToken = true;
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = builder.Configuration["JwtConfig:Issuer"],
        ValidAudience = builder.Configuration["JwtConfig:Audience"],
        IssuerSigningKey = new SymmetricSecurityKey(
            Encoding.UTF8.GetBytes(Environment.GetEnvironmentVariable("JWTKEY")
                 ?? throw new InvalidOperationException("Environment variable 'JWTKEY' is not set.")
                )),
        ClockSkew = TimeSpan.Zero
    };
});





var app = builder.Build();

// Seeding
await DatabaseSeeder.SeedImagesAsync(app.Services);
using (var seedScope = app.Services.CreateScope())
{
    var seedContext = seedScope.ServiceProvider.GetRequiredService<AppDbContext>();
    await DatabaseSeeder.SeedAuthors(seedContext);
    await DatabaseSeeder.SeedBooks(seedContext);
}





//PipeLine
app.Use(async (context, next) =>
{
    try
    {
        await next();
    }
    catch (Exception)
    {
        context.Response.StatusCode = 500;
        await context.Response.WriteAsJsonAsync(new { error = "An unexpected error occurred. Please try again later." });
    }
});

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseCors("AllowReact");
app.UseAuthentication();
app.UseAuthorization();


app.MapControllers();


app.Run();
