
using Microsoft.AspNetCore.Mvc;
using MyProject.Data;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("search/[controller]")]

public class UserController : ControllerBase
{
    private readonly AppDbContext _context;

    public UserController( AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult>  GetUserName()
    {
        var user = await _context.Users.FirstOrDefaultAsync();


      

       return Ok(new { userName = user.UserName });
    }


}