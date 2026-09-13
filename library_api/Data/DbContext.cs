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

    public DbSet<Author> FavouriteAuthors { get; set; }

   
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
    // modelBuilder.Entity<Category>().HasData(
    //     new Category { Id = 1, Name = "fantasy" },
    //     new Category { Id = 2, Name = "science fiction" },
    //     new Category { Id = 3, Name = "horror" },
    //     new Category { Id = 4, Name = "romance" },
    //     new Category { Id = 5, Name = "adventure" },
    //     new Category { Id = 6, Name = "biography" }
    // );

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

 
  
    }

   
}

}
