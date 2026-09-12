
using Microsoft.AspNetCore.Mvc;
using MyProject.Data;
using Microsoft.EntityFrameworkCore;
using Library_Api.Services;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

[ApiController]
[Route("search/[controller]")]
public class BooksController : ControllerBase
{

    private readonly AppDbContext _context;
    private readonly RecommendService _recomended;

    private readonly SearchBookService _search;

    private readonly RentBookService _rent;

     public BooksController(AppDbContext context, RecommendService recomended, SearchBookService search, RentBookService rent)
    {
        _context = context;
        _recomended = recomended;
        _search =   search;
        _rent = rent;
    }

    [HttpGet]
    public IActionResult SearchBooks(string? title, string? author)
    {
       
        var books = _context.books
        .Where(b =>
            (title != null && b.tytul.Contains(title)) ||
            (author != null && b.autor.Contains(author))
        )
        .ToList();

        
        
        return Ok(books);





    }
    
    [HttpGet("category/{category}")]
    public IActionResult GetBooksByCategory(string category)
    {
        var books = _context.books
            .Where(b => b.gatunek == category)
            .ToList();

        return Ok(books);
    }


    [HttpGet("recomended")]
    public async Task<IActionResult> GetRecomendedBooks(string userName )
    {
        var books = await _recomended.GetRecommendedUsers(userName);
        return Ok(books);
    }



    [HttpGet("search-books")]
    public async Task<IActionResult> GetBooksBytitle(string? title)
    {
        var books = await _search.SearchBooks(title ?? "");

        return Ok(books);
    }



    //Rent endpoint
    [Authorize]
    [HttpPut("rent")]
    public async Task<IActionResult> RentBook( [FromBody] List<string> booksIds )
    {
        var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        if (!int.TryParse(userId, out var parsedUserId))
            return Unauthorized();

        try
        {
            await _rent.RentBooks(booksIds, parsedUserId);
            return Ok(new { message = "book rented" });
        }
        catch (ArgumentException exception)
        {
            return BadRequest(new { message = exception.Message });
        }
        catch (InvalidOperationException exception)
        {
            return Conflict(new { message = exception.Message });
        }
    }

    

    // [Authorize]
    // [HttpGet("rent")]
    // public async Task<IActionResult> GetRentalHistory()
    // {
    //     var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
    //     if (!int.TryParse(userId, out var parsedUserId))
    //         return Unauthorized();

    //     var history = await _context.RentalHistories
    //         .AsNoTracking()
    //         .Where(rental => rental.UserId == parsedUserId)
    //         .OrderByDescending(rental => rental.StartDate)
    //         .Select(rental => new
    //         {
    //             rental.Id,
    //             rental.StartDate,
    //             rental.EndDate,
    //             book = new
    //             {
    //                 rental.Book.id,
    //                 rental.Book.tytul,
    //                 rental.Book.autor,
    //                 rental.Book.gatunek
    //             }
    //         })
    //         .ToListAsync();

    //     return Ok(history);
    // }


}
