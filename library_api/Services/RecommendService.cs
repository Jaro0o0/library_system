using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;
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
            return [];
        }

        var books = await _context.books.ToListAsync();

        var recomendations = books.Select(book =>
        {
            int score = 0;

            if (user.FavoriteAuthors
                .Any(a => a.Name == book.autor))
            {
                score += 5;
            }

            return new
            {
                Book = book,
                Score = score
            };
        })
        .Where(x => x.Score > 0)
        .OrderByDescending(x => x.Score)
        .Select(x => x.Book)
        .ToList();

        return recomendations;
    }
   


}