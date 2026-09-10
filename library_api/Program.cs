using Microsoft.EntityFrameworkCore;
using MyProject.Data;
using DotNetEnv;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Library_Api.Services;

Env.Load();

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();
builder.Services.AddControllers();
builder.Services.AddCors(options =>
{
    options.AddPolicy("Frontend", policy => policy
        .WithOrigins("http://localhost:5173")
        .AllowAnyHeader()
        .AllowAnyMethod());
});


//Custom SERVICES
 builder.Services.AddScoped<IRegisterService, UserService>();


//DATABASE
// Build connection string from environment variables if present, otherwise fall back to configuration
var envHost = Environment.GetEnvironmentVariable("DB_HOST");
string connectionString;
if (!string.IsNullOrEmpty(envHost))
{
    connectionString =
        $"Host={envHost};" +
        $"Port={Environment.GetEnvironmentVariable("DB_PORT")};" +
        $"Database={Environment.GetEnvironmentVariable("DB_NAME")};" +
        $"Username={Environment.GetEnvironmentVariable("DB_USER")};" +
        $"Password={Environment.GetEnvironmentVariable("DB_PASSWORD")}";
}
else
{
    connectionString = builder.Configuration.GetConnectionString("DefaultConnection")!;
}

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(connectionString));


//Auth
builder.Services.AddScoped<JwtService>();
builder.Services.AddSingleton<PasswordService>();

builder.Services.AddAuthorization();

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
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = builder.Configuration["JtwConfig:Issuer"],
        ValidAudience = builder.Configuration["JtwConfig:Audience"],
        IssuerSigningKey = new SymmetricSecurityKey(
            Encoding.UTF8.GetBytes(builder.Configuration["JtwConfig:Key"]!)),
        ClockSkew = TimeSpan.Zero
    };
});

builder.Services.AddAuthorization();

//Custom Setvies
builder.Services.AddScoped<RecommendService>();
builder.Services.AddScoped<SearchBookService>();
builder.Services.AddScoped<RentBookService>();

var app = builder.Build();

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

app.UseCors("AllowReact");
app.UseAuthentication();
app.UseAuthorization();

app.MapOpenApi();
app.MapControllers();
app.MapGet("/", () => "Library system");

app.Run();

