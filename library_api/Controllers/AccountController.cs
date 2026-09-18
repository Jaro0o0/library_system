using Microsoft.AspNetCore.Mvc;
using Backend.Data;
using Backend.Models;
using Library_Api.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query.Internal;



[ApiController]
[Route("auth/[controller]")]
public class AccountController  : ControllerBase
{
    private readonly AppDbContext _dbContext;
    private readonly PasswordService _passwordService;
    private readonly JwtService _jwtService;


    public AccountController(AppDbContext dbContext, PasswordService passwordService,JwtService jwtService)
    {
        _dbContext = dbContext;
         _passwordService = passwordService;
        _jwtService = jwtService;
    }


    [HttpPost("login")]
    public async Task<ActionResult<LoginRequestModel>> Login(LoginCredentialsModel request)
    {
        if (string.IsNullOrWhiteSpace(request.UserName) || string.IsNullOrWhiteSpace(request.Password))
            return BadRequest("User name and password are required.");

        var user = await _dbContext.Users.SingleOrDefaultAsync(user => user.UserName == request.UserName.Trim());
        if (user is null || !_passwordService.Verify(request.Password, user.PasswordHash))
            return Unauthorized("Invalid user name or password.");

        return Ok(_jwtService.GenerateToken(user));
    }




    [HttpPost("register")]
    public async Task<IActionResult> Register( [FromBody] RegisterRequestModel request)
    {
        


        //Validation
        if (string.IsNullOrWhiteSpace(request.UserName))
        {
            return BadRequest("User name are required.");
        }

        if (string.IsNullOrWhiteSpace(request.Password))
        {
            return BadRequest("Password are required.");
        }

        if (string.IsNullOrWhiteSpace(request.Email ))
        {
            return BadRequest("Email are required.");
        }

        



        //Valdiaation same users
        var userName = request.UserName.Trim();
        if (await _dbContext.Users.AnyAsync(user => user.UserName == userName))
        {
            return Conflict("A user with this name already exists.");
        }



        var email = request.Email;


         //Create user
        var user = new LibraryUser
        {
            Email  =  email,
            UserName = userName,
            PasswordHash = _passwordService.Hash(request.Password)
        };

        //Append user to database
        _dbContext.Users.Add(user);
         await _dbContext.SaveChangesAsync();


      //Response for frontend
      return Created(string.Empty, _jwtService.GenerateToken(user));

    }


   
 


}
