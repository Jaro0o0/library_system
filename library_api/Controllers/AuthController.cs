using Library_Api.Models;
using Library_Api.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyProject.Data;

[ApiController]
[Route("api/auth")]
public class AuthController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly JwtService _jwtService;
    private readonly PasswordService _passwordService;

    public AuthController(AppDbContext context, JwtService jwtService, PasswordService passwordService)
    {
        _context = context;
        _jwtService = jwtService;
        _passwordService = passwordService;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register(RegisterRequestModel request)
    {
        if (string.IsNullOrWhiteSpace(request.UserName) || string.IsNullOrWhiteSpace(request.Password))
            return BadRequest("User name and password are required.");

        if (request.Password.Length < 8)
            return BadRequest("Password must contain at least 8 characters.");

        var userName = request.UserName.Trim();
        if (await _context.Users.AnyAsync(user => user.UserName == userName))
            return Conflict("A user with this name already exists.");

        var user = new LibraryUser
        {
            UserName = userName,
            PasswordHash = _passwordService.Hash(request.Password)
        };

        _context.Users.Add(user);
        await _context.SaveChangesAsync();

        return Created(string.Empty, _jwtService.GenerateToken(user));
    }

    [HttpPost("login")]
    public async Task<ActionResult<LoginRequestModel>> Login(LoginCredentialsModel request)
    {
        if (string.IsNullOrWhiteSpace(request.UserName) || string.IsNullOrWhiteSpace(request.Password))
            return BadRequest("User name and password are required.");

        var user = await _context.Users.SingleOrDefaultAsync(user => user.UserName == request.UserName.Trim());
        if (user is null || !_passwordService.Verify(request.Password, user.PasswordHash))
            return Unauthorized("Invalid user name or password.");

        return Ok(_jwtService.GenerateToken(user));
    }
}
