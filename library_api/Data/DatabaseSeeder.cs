using Microsoft.EntityFrameworkCore;
using Backend.Data;
using Backend.Models;

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
        };
    }

    private static string GetContentType(string filePath) =>
        Path.GetExtension(filePath).ToLowerInvariant() switch
        {
            ".png" => "image/png",
            ".webp" => "image/webp",
            _ => "image/jpeg"
        };





    // Authors Seed
    public static async Task SeedAuthors(AppDbContext context)
    {
        if (await context.Authors.AnyAsync())
        return;
         
        var authors = new List<Author>
        {
            // FANTASY
            new Author { Id = 1, Name = "J.R.R. Tolkien" },
            new Author { Id = 2, Name = "George R.R. Martin" },
            new Author { Id = 3, Name = "Brandon Sanderson" },
            new Author { Id = 4, Name = "Andrzej Sapkowski" },
            new Author { Id = 5, Name = "Patrick Rothfuss" },
            new Author { Id = 6, Name = "Robert Jordan" },
            new Author { Id = 7, Name = "Steven Erikson" },
            new Author { Id = 8, Name = "C.S. Lewis" },
            new Author { Id = 9, Name = "J.K. Rowling" },

            // SCIENCE
            new Author { Id = 10, Name = "Carl Sagan" },
            new Author { Id = 11, Name = "Stephen Hawking" },
            new Author { Id = 12, Name = "Neil deGrasse Tyson" },
            new Author { Id = 13, Name = "Richard Feynman" },
            new Author { Id = 14, Name = "Brian Greene" },
            new Author { Id = 15, Name = "Michio Kaku" },
            new Author { Id = 16, Name = "David Attenborough" },
            new Author { Id = 17, Name = "Richard Dawkins" },
            new Author { Id = 18, Name = "Mary Roach" },

            // SCIENCE FICTION
            new Author { Id = 19, Name = "Isaac Asimov" },
            new Author { Id = 20, Name = "Philip K. Dick" },
            new Author { Id = 21, Name = "Frank Herbert" },
            new Author { Id = 22, Name = "Arthur C. Clarke" },
            new Author { Id = 23, Name = "Ursula K. Le Guin" },
            new Author { Id = 24, Name = "William Gibson" },
            new Author { Id = 25, Name = "Ray Bradbury" },
            new Author { Id = 26, Name = "H.G. Wells" },
            new Author { Id = 27, Name = "Jules Verne" }
        };


        await context.Authors.AddRangeAsync(authors);
        await context.SaveChangesAsync();
        
     

    }

    public static async Task SeedBooks(AppDbContext context)
    {
        if (await context.books.AnyAsync())
            return;

        var books = new List<Book>
        {
             new Book
            {
                id = 1,
                tytul = "The Hobbit",
                autor = "J.R.R. Tolkien",
                gatunek = "fantasy",
                IsRented = false
            },
            new Book
            {
                id = 2,
                tytul = "The Fellowship of the Ring",
                autor = "J.R.R. Tolkien",
                gatunek = "fantasy",
                IsRented = false
            },
            new Book
            {
                id = 3,
                tytul = "Harry Potter and the Philosopher's Stone",
                autor = "J.K. Rowling",
                gatunek = "fantasy",
                IsRented = false
            },

            // SCIENCE FICTION
            new Book
            {
                id = 4,
                tytul = "Dune",
                autor = "Frank Herbert",
                gatunek = "science fiction",
                IsRented = false
            },
            new Book
            {
                id = 5,
                tytul = "Foundation",
                autor = "Isaac Asimov",
                gatunek = "science fiction",
                IsRented = false
            },
            new Book
            {
                id = 6,
                tytul = "Neuromancer",
                autor = "William Gibson",
                gatunek = "science fiction",
                IsRented = false
            },

            // HORROR
            new Book
            {
                id = 7,
                tytul = "It",
                autor = "Stephen King",
                gatunek = "horror",
                IsRented = false
            },
            new Book
            {
                id = 8,
                tytul = "The Shining",
                autor = "Stephen King",
                gatunek = "horror",
                IsRented = false
            },
            new Book
            {
                id = 9,
                tytul = "Dracula",
                autor = "Bram Stoker",
                gatunek = "horror",
                IsRented = false
            },

            // ROMANCE
            new Book
            {
                id = 10,
                tytul = "Pride and Prejudice",
                autor = "Jane Austen",
                gatunek = "romance",
                IsRented = false
            },
            new Book
            {
                id = 11,
                tytul = "The Notebook",
                autor = "Nicholas Sparks",
                gatunek = "romance",
                IsRented = false
            },
            new Book
            {
                id = 12,
                tytul = "Me Before You",
                autor = "Jojo Moyes",
                gatunek = "romance",
                IsRented = false
            },

            // ADVENTURE
            new Book
            {
                id = 13,
                tytul = "Treasure Island",
                autor = "Robert Louis Stevenson",
                gatunek = "adventure",
                IsRented = false
            },
            new Book
            {
                id = 14,
                tytul = "The Three Musketeers",
                autor = "Alexandre Dumas",
                gatunek = "adventure",
                IsRented = false
            },
            new Book
            {
                id = 15,
                tytul = "Around the World in Eighty Days",
                autor = "Jules Verne",
                gatunek = "adventure",
                IsRented = false
            },

            // BIOGRAPHY
            new Book
            {
                id = 16,
                tytul = "Steve Jobs",
                autor = "Walter Isaacson",
                gatunek = "biography",
                IsRented = false
            },
            new Book
            {
                id = 17,
                tytul = "Einstein: His Life and Universe",
                autor = "Walter Isaacson",
                gatunek = "biography",
                IsRented = false
            },
            new Book
            {
                id = 18,
                tytul = "Long Walk to Freedom",
                autor = "Nelson Mandela",
                gatunek = "biography"
            }
        };
        await context.books.AddRangeAsync(books);
        await context.SaveChangesAsync();
    }


}
