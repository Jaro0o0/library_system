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

    public async Task<List<Book>> GetRecommendedUsers(int userId, int count)
    {
        var user = await _context.Users
            .Include(u => u.FavoriteAuthors)
            .FirstAsync(u => u.Id == userId);

        var books = await _context.books.ToListAsync();

        var recomendations = books.Select(book => {
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
        .Take(count)
        .Select(x => x.Book)
        .ToList();

        return recomendations;
    }

   


}