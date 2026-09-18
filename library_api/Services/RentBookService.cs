using Microsoft.EntityFrameworkCore;
using Backend.Data;
using Backend.Models;
using System.Data;

namespace Library_Api.Services {
    
    public class RentBookService
    {

        private readonly AppDbContext _context;

        public RentBookService( AppDbContext context )
        {
            _context = context;            
        }

        public async Task RentBooks(List<string> bookTitles, int userId)
        {
            var titles = bookTitles
                .Where(title => !string.IsNullOrWhiteSpace(title))
                .Select(title => title.Trim())
                .Distinct(StringComparer.OrdinalIgnoreCase)
                .ToList();

            if (titles.Count == 0)
                throw new ArgumentException("Select at least one book.");

            var books = await _context.books
                .Where(book => titles.Contains(book.tytul))
                .ToListAsync();

            if (books.Count != titles.Count)
                throw new ArgumentException("One or more selected books do not exist.");

            if (books.Any(book => book.IsRented))
                throw new InvalidOperationException("One or more selected books are already rented.");

            var now = DateTime.UtcNow;
            foreach (var book in books)
            {
                book.IsRented = true;
                _context.RentalHistories.Add(new RentalHistory
                {
                    BookId = book.id,
                    UserId = userId,
                    StartDate = now,
                    EndDate = now.AddMonths(1)
                });
            }

            await _context.SaveChangesAsync();
        }
    }
}
