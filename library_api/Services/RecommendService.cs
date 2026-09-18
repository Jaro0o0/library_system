using Microsoft.EntityFrameworkCore;
using Backend.Data;
using Backend.Models;

public class RecommendService
{
    private readonly AppDbContext _context;

    public RecommendService(AppDbContext context)
    {
        _context = context;
    }

    public async Task<List<Book>> GetRecommendedUsers(string userName)
    {
        if (string.IsNullOrWhiteSpace(userName))
        {
            return new List<Book>();
        }

        var user = await _context.Users
            .AsNoTracking()
            .FirstOrDefaultAsync(u => u.UserName == userName);

        if (user == null)
        {
            return new List<Book>();
        }

        var recentAuthors = await _context.RentalHistories
            .AsNoTracking()
            .Where(rental => rental.UserId == user.Id)
            .OrderByDescending(rental => rental.StartDate)
            .Select(rental => rental.Book.autor)
            .Distinct()
            .Take(5)
            .ToListAsync();

        if (!recentAuthors.Any())
        {
            return new List<Book>();
        }

        var recommendedBooks = await _context.books
            .AsNoTracking()
            .Where(book => recentAuthors.Contains(book.autor))
            .Where(book => !_context.RentalHistories.Any(rental =>
                rental.UserId == user.Id && rental.BookId == book.id))
            .Take(10)
            .ToListAsync();

        return recommendedBooks;
    }
}

