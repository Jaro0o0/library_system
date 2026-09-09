using Microsoft.EntityFrameworkCore;
using Library_Api.Models;


namespace MyProject.Data{

public class Book
{
    public int id { get; set; }
    public string tytul { get; set; } = "";
    public string autor { get; set; } = "";
    public string? gatunek { get; set; }
}

public class Category
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
}



public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    //context Tabli BOkks
    public DbSet<Book> books { get; set; }
    public DbSet<LibraryUser> Users { get; set; }

    public DbSet<Category> Categories { get; set;} 

    public DbSet<Author> Authors { get; set; }

    //SEEDING DATA
    protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    base.OnModelCreating(modelBuilder);

    modelBuilder.Entity<LibraryUser>(entity =>
    {
        entity.HasIndex(user => user.UserName).IsUnique();
        entity.Property(user => user.UserName).HasMaxLength(100);
        entity.Property(user => user.PasswordHash).HasMaxLength(500);
    });

    modelBuilder.Entity<LibraryUser>()
        .HasMany(user => user.FavoriteAuthors)
        .WithMany(author => author.Users)
        .UsingEntity(join => join.ToTable("UserFavoriteAuthors"));

    // Categories
    modelBuilder.Entity<Category>().HasData(
        new Category { Id = 1, Name = "fantasy" },
        new Category { Id = 2, Name = "science fiction" },
        new Category { Id = 3, Name = "horror" },
        new Category { Id = 4, Name = "romance" },
        new Category { Id = 5, Name = "adventure" },
        new Category { Id = 6, Name = "biography" }
    );

   


    // Books
    modelBuilder.Entity<Book>().HasData(

        // FANTASY
        new Book
        {
            id = 1,
            tytul = "The Hobbit",
            autor = "J.R.R. Tolkien",
            gatunek = "fantasy"
        },
        new Book
        {
            id = 2,
            tytul = "The Fellowship of the Ring",
            autor = "J.R.R. Tolkien",
            gatunek = "fantasy"
        },
        new Book
        {
            id = 3,
            tytul = "Harry Potter and the Philosopher's Stone",
            autor = "J.K. Rowling",
            gatunek = "fantasy"
        },

        // SCIENCE FICTION
        new Book
        {
            id = 4,
            tytul = "Dune",
            autor = "Frank Herbert",
            gatunek = "science fiction"
        },
        new Book
        {
            id = 5,
            tytul = "Foundation",
            autor = "Isaac Asimov",
            gatunek = "science fiction"
        },
        new Book
        {
            id = 6,
            tytul = "Neuromancer",
            autor = "William Gibson",
            gatunek = "science fiction"
        },

        // HORROR
        new Book
        {
            id = 7,
            tytul = "It",
            autor = "Stephen King",
            gatunek = "horror"
        },
        new Book
        {
            id = 8,
            tytul = "The Shining",
            autor = "Stephen King",
            gatunek = "horror"
        },
        new Book
        {
            id = 9,
            tytul = "Dracula",
            autor = "Bram Stoker",
            gatunek = "horror"
        },

        // ROMANCE
        new Book
        {
            id = 10,
            tytul = "Pride and Prejudice",
            autor = "Jane Austen",
            gatunek = "romance"
        },
        new Book
        {
            id = 11,
            tytul = "The Notebook",
            autor = "Nicholas Sparks",
            gatunek = "romance"
        },
        new Book
        {
            id = 12,
            tytul = "Me Before You",
            autor = "Jojo Moyes",
            gatunek = "romance"
        },

        // ADVENTURE
        new Book
        {
            id = 13,
            tytul = "Treasure Island",
            autor = "Robert Louis Stevenson",
            gatunek = "adventure"
        },
        new Book
        {
            id = 14,
            tytul = "The Three Musketeers",
            autor = "Alexandre Dumas",
            gatunek = "adventure"
        },
        new Book
        {
            id = 15,
            tytul = "Around the World in Eighty Days",
            autor = "Jules Verne",
            gatunek = "adventure"
        },

        // BIOGRAPHY
        new Book
        {
            id = 16,
            tytul = "Steve Jobs",
            autor = "Walter Isaacson",
            gatunek = "biography"
        },
        new Book
        {
            id = 17,
            tytul = "Einstein: His Life and Universe",
            autor = "Walter Isaacson",
            gatunek = "biography"
        },
        new Book
        {
            id = 18,
            tytul = "Long Walk to Freedom",
            autor = "Nelson Mandela",
            gatunek = "biography"
        }
    );
}





   
}

}
