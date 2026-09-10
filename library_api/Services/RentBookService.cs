using Microsoft.EntityFrameworkCore;
using MyProject.Data;
using Library_Api.Models;

namespace Library_Api.Services {
    
    public class RentBookService
    {

        private readonly AppDbContext _context;

        public RentBookService( AppDbContext context )
        {
            _context = context;            
        }

        public async Task MarkBook( List<string> booksIds)
        {
          
            // Request_Books
            foreach(var requestBook in booksIds)
            {

           

                var books = await _context.books
                    .Where(b => b.tytul.Contains(requestBook))
                    .ToListAsync();

                // Mark_AS_RENTED
                foreach(var book in books)
                {
                    book.IsRented = true;
                }
            }

            await _context.SaveChangesAsync();
        }
    }
}