using Microsoft.EntityFrameworkCore;
using Library_Api.Models;


namespace MyProject.Data{

public class Book
{
    public int id { get; set; }
    public string tytul { get; set; } = "";
    public string autor { get; set; } = "";
    public string? gatunek { get; set; }

    public bool IsRented {get; set;} = false;

    public DateTime StartDate {get; set;}

    public DateTime  EndDate {get; set;}

    public int? ImageId { get; set; }

    public ICollection<RentalHistory> RentalHistories { get; set; }
        = new List<RentalHistory>();
}

public class Category
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
}


public class RentalHistory
{
    public int Id { get; set; }

    public int BookId { get; set; }
    public Book Book { get; set; } = null!;

    public int UserId { get; set; }
    public LibraryUser User { get; set; } = null!;

    public DateTime StartDate { get; set; }
    public DateTime? EndDate { get; set; }
}


// Images
public class Image
{
    public int Id { get; set; }
    public byte[] ImageData { get; set; }
    public string ContentType { get; set; }
}




public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    //context Tabli BOkks
    public DbSet<Book> books { get; set; }

    public DbSet<RentalHistory> RentalHistories { get; set; }
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

    //LibraryUser - FavoriteAuthors relationship
    modelBuilder.Entity<LibraryUser>()
        .HasMany(user => user.FavoriteAuthors)
        .WithMany(author => author.Users)
        .UsingEntity(join => join.ToTable("UserFavoriteAuthors"));

    modelBuilder.Entity<Author>()
        .HasIndex(author => author.Name)
        .IsUnique();





    // Categories
    modelBuilder.Entity<Category>().HasData(
        new Category { Id = 1, Name = "fantasy" },
        new Category { Id = 2, Name = "science fiction" },
        new Category { Id = 3, Name = "horror" },
        new Category { Id = 4, Name = "romance" },
        new Category { Id = 5, Name = "adventure" },
        new Category { Id = 6, Name = "biography" }
    );

   //Rental Hisotry
    modelBuilder.Entity<RentalHistory>()
        .HasOne(rent => rent.Book)
        .WithMany(book => book.RentalHistories)
        .HasForeignKey(rent => rent.BookId);

    modelBuilder.Entity<RentalHistory>()
        .HasOne(rent => rent.User)
        .WithMany()
        .HasForeignKey(rent => rent.UserId);


    modelBuilder.Entity<Book>()
        .HasOne<Image>()
        .WithOne()
        .HasForeignKey<Book>(b => b.ImageId);

    // Books
    modelBuilder.Entity<Book>().HasData(

        // FANTASY
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
    );
}





   
}

}
