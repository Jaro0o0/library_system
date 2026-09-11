using Microsoft.EntityFrameworkCore;
using MyProject.Data;
using Library_Api.Models;
using System.Data;

namespace Library_Api.Services {
    
    public class RentBookService
    {

        private readonly AppDbContext _context;

        public RentBookService( AppDbContext context )
        {
            _context = context;            
        }

        public async Task<List<Book>> MarkBook( List<string> booksIds)
        {
          
            var allRentedBooks = new List<Book>();

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

                    allRentedBooks.Add(book);

                    //History
                    var rentalHistory = new RentalHistory
                    {
                        BookId = book.id,
                        StartDate = DateTime.UtcNow,
                        EndDate = DateTime.UtcNow.AddMonths(1)
                    };

                     _context.RentalHistories.Add(rentalHistory);


                    //Table Response
                    allRentedBooks.Add(book);

                }
            }

            await _context.SaveChangesAsync();

            return allRentedBooks;
        }
    }
}