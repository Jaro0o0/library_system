
using Microsoft.EntityFrameworkCore;
using MyProject.Data;

public class RecommendService
{
    private readonly AppDbContext _context;

    public RecommendService(AppDbContext context)
    {
        _context = context;
    }

    public async Task<List<Book>> GetRecommendedUsers(string userName)
    {
        var user = await _context.Users
            .Include(u => u.FavoriteAuthors)
            .FirstOrDefaultAsync(u => u.UserName == userName);

        if (user is null)
        {
            Console.WriteLine("USER NOT FOUND");
            return [];
        }

        Console.WriteLine($"USER: {user.UserName}");
        Console.WriteLine($"FAVORITE AUTHORS COUNT: {user.FavoriteAuthors.Count}");

        foreach (var author in user.FavoriteAuthors)
        {
            Console.WriteLine($"FAVORITE AUTHOR: [{author.Name}]");
        }

        var books = await _context.books.ToListAsync();

        foreach (var book in books)
        {
            Console.WriteLine($"BOOK: {book.tytul} | AUTHOR: {book.autor}");
        }

        var recommendations = books
            .Where(book =>
                user.FavoriteAuthors.Any(author =>
                    author.Name == book.autor))
            .ToList();

        Console.WriteLine($"RECOMMENDATIONS: {recommendations.Count}");

        return recommendations;
    }
}

