using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;
using MyProject.Data;



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