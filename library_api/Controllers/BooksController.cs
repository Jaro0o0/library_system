
using Microsoft.AspNetCore.Mvc;
using MyProject.Data;
using Microsoft.EntityFrameworkCore;
using Library_Api.Services;

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
    public async Task<IActionResult> GetRecomendedBooks(int userId, int count)
    {
        var books = await _recomended.GetRecommendedUsers(userId, count);
        return Ok(books);
    }



    [HttpGet("search-books")]
    public async Task<IActionResult> GetBooksBytitle(string? title)
    {
        var books = await _search.SearchBooks(title ?? "");

        return Ok(books);
    }



    //Rent endpoint
    [HttpPut("rent")]
    public async Task<IActionResult> RentBook( [FromBody] List<string> booksIds )
    {

       


        var rentBooks = await _rent.MarkBook();

        return Ok('book rented')
    }


}