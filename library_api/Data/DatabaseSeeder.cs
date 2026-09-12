using Microsoft.EntityFrameworkCore;

namespace MyProject.Data;

public static class DatabaseSeeder
{
    private static readonly IReadOnlyDictionary<string, string> BookImages =
        new Dictionary<string, string>
        {
            ["The Hobbit"] = "the-hobbit.jpg",
            ["The Fellowship of the Ring"] = "the-fellowship-of-the-ring.jpg",
            ["Harry Potter and the Philosopher's Stone"] = "harry-potter-and-the-philosophers-stone.jpg",
            ["Dune"] = "dune.jpg",
            ["Foundation"] = "foundation.jpg",
            ["Neuromancer"] = "neuromancer.jpg",
            ["It"] = "it.jpg",
            ["The Shining"] = "the-shining.jpg",
            ["Dracula"] = "dracula.jpg",
            ["Pride and Prejudice"] = "pride-and-prejudice.jpg",
            ["The Notebook"] = "the-notebook.jpg",
            ["Me Before You"] = "me-before-you.jpg",
            ["Treasure Island"] = "treasure-island.jpg",
            ["The Three Musketeers"] = "the-three-musketeers.jpg",
            ["Around the World in Eighty Days"] = "around-the-world-in-eighty-days.jpg",
            ["Steve Jobs"] = "steve-jobs.jpg",
            ["Einstein: His Life and Universe"] = "einstein-his-life-and-universe.jpg",
            ["Long Walk to Freedom"] = "long-walk-to-freedom.jpg"
        };

    public static async Task SeedImagesAsync(IServiceProvider services)
    {
        using var scope = services.CreateScope();
        var environment = scope.ServiceProvider.GetRequiredService<IWebHostEnvironment>();
        var context = scope.ServiceProvider.GetRequiredService<AppDbContext>();
        var imagesDirectory = Path.Combine(environment.ContentRootPath, "SeedImages");

        if (!Directory.Exists(imagesDirectory))
            return;

        foreach (var (title, fileName) in BookImages)
        {
            var book = await context.books.SingleOrDefaultAsync(book => book.tytul == title);
            var filePath = Path.Combine(imagesDirectory, fileName);

            // Do not replace an image that has already been saved for this book.
            if (book is null || book.ImageId is not null || !File.Exists(filePath))
                continue;

            var image = new Image
            {
                ImageData = await File.ReadAllBytesAsync(filePath),
                ContentType = GetContentType(filePath)
            };

            context.Set<Image>().Add(image);
            await context.SaveChangesAsync();

            book.ImageId = image.Id;
            await context.SaveChangesAsync();
        }
    }

    private static string GetContentType(string filePath) =>
        Path.GetExtension(filePath).ToLowerInvariant() switch
        {
            ".png" => "image/png",
            ".webp" => "image/webp",
            _ => "image/jpeg"
        };
}
