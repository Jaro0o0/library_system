using Microsoft.AspNetCore.Mvc;
using MyProject.Data;
using Library_Api.Models;
using Library_Api.Services;
using Microsoft.EntityFrameworkCore;


[ApiController]
[Route("account/[controller]")]
public class RegisterController : ControllerBase
{
    private readonly AppDbContext _dbContext;
    private readonly IRegisterService _registerService;

    public RegisterController(AppDbContext dbContext, IRegisterService registerService)
    {
        _dbContext = dbContext;
        _registerService = registerService;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register(RegisterRequestModel request)
    {
      //Chcek is user already exiist
      if (string.IsNullOrWhiteSpace(request.UserName) || string.IsNullOrWhiteSpace(request.Password))
          return BadRequest("User name and password are required.");

      if (request.Password.Length < 8)
          return BadRequest("Password must contain at least 8 characters.");

      var userName = request.UserName.Trim();
      if (await _dbContext.Users.AnyAsync(user => user.UserName == userName))
          return Conflict("A user with this name already exists.");

      var passwordService = HttpContext.RequestServices.GetRequiredService<PasswordService>();
      var jwtService = HttpContext.RequestServices.GetRequiredService<JwtService>();

      var user = new LibraryUser
      {
          UserName = userName,
          PasswordHash = passwordService.Hash(request.Password)
      };

      _dbContext.Users.Add(user);
      await _dbContext.SaveChangesAsync();

      return Created(string.Empty, jwtService.GenerateToken(user));
    }
}