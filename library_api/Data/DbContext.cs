using Microsoft.EntityFrameworkCore;

namespace MyProject.Data{

public class Book
{
    public int id { get; set; }
    public string tytul { get; set; } = "";
    public string autor { get; set; } = "";
}

public class LibraryUser
{
    public int Id { get; set; }
    public string UserName { get; set; } = "";
    public string PasswordHash { get; set; } = "";
    public DateTime CreatedAtUtc { get; set; } = DateTime.UtcNow;
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

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<LibraryUser>(entity =>
        {
            entity.HasIndex(user => user.UserName).IsUnique();
            entity.Property(user => user.UserName).HasMaxLength(100);
            entity.Property(user => user.PasswordHash).HasMaxLength(500);
        });
    }
}

}
