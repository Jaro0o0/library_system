
using Microsoft.AspNetCore.Mvc;
using MyProject.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;

[ApiController]
[Route("search/[controller]")]

public class UserController : ControllerBase
{
    private readonly AppDbContext _context;

    public UserController( AppDbContext context)
    {
        _context = context;
    }

    [Authorize]
    [HttpGet]
    public async Task<IActionResult>  GetUserName()
    {
        var userId = User.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier)?.Value;

        if (!int.TryParse(userId, out var parsedUserId))
            return Unauthorized();

        var user = await _context.Users.FindAsync(parsedUserId);

        if (user is null)
            return Unauthorized();

        return Ok(new { userName = user.UserName });
    }


}
