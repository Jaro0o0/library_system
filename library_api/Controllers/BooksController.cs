
using Microsoft.AspNetCore.Mvc;
using MyProject.Data;

[ApiController]
[Route("search/[controller]")]
public class BooksController : ControllerBase
{

    private readonly AppDbContext _context;

     public BooksController(AppDbContext context)
    {
        _context = context;
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
}