using Microsoft.EntityFrameworkCore;
using Backend.Models;
using Backend.Data;



public class SearchBookService
{
    private readonly AppDbContext _context;

    public SearchBookService(AppDbContext context)
    {
        _context = context;

    }


    public async  Task<List<Book>>SearchBooks( string title)
    {
        var books = await _context.books
            .Where(b => b.tytul.Contains(title))
            .ToListAsync();

        return  books;
      

    }
   

}