using Microsoft.EntityFrameworkCore;
using Backend.Models;


namespace Backend.Data{





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

        public DbSet<Author> Authors { get; set; }

        

    
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
        // modelBuilder.Entity<LibraryUser>()
        //     .HasMany(user => user.FavoriteAuthors)
        //     .WithMany(author => author.Users)
        //     .UsingEntity(join => join.ToTable("UserFavoriteAuthors"));

        modelBuilder.Entity<Author>()
            .HasIndex(author => author.Name)
            .IsUnique();


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
