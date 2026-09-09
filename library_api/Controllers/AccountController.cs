using Microsoft.AspNetCore.Mvc;
using MyProject.Data;
using Library_Api.Models;
using Library_Api.Services;
using Microsoft.EntityFrameworkCore;



[ApiController]
[Route("auth/[controller]")]
public class AccountController  : ControllerBase
{
    private readonly AppDbContext _dbContext;
    private readonly IRegisterService _registerService;

    private readonly PasswordService _passwordService;
    private readonly JwtService _jwtService;


    public AccountController(AppDbContext dbContext, IRegisterService registerService, PasswordService passwordService,JwtService jwtService)
    {
        _dbContext = dbContext;
        _registerService = registerService;
         _passwordService = passwordService;
        _jwtService = jwtService;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register(RegisterRequestModel request)
    {
        
        //Valdiaation same users
        var userName = request.UserName.Trim();
        if (await _dbContext.Users.AnyAsync(user => user.UserName == userName))
        {
            return Conflict("A user with this name already exists.");
        }



         //Create user
        var user = new LibraryUser
        {
            UserName = userName,
            PasswordHash = _passwordService.Hash(request.Password)
        };

        //Append user to database
        _dbContext.Users.Add(user);
         await _dbContext.SaveChangesAsync();


      //Response for frontend
      return Created(string.Empty, _jwtService.GenerateToken(user));

    }

    [HttpPost("recomend")]
    public async Task<IActionResult> GetPreferences(UserPreferencesModel request)
    {
        var  Recomendation = request.AuthorType;
    }

    // public async Task<IActionResult> Logout()
    // {
    //     var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

    // }


}