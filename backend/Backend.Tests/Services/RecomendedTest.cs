using Backend.Data;
using Backend.Models;
using Moq;
using Moq.EntityFrameworkCore;
using Library_Api.Services;
using Microsoft.EntityFrameworkCore;


namespace Backend.Tests.Services
{
    
    public class RecommendServiceTests
    {
        
        [Fact]
        public async Task GetRecommendedUsers_ShouldReturnBooksFromRecentlyReadAuthors()
        {
            // Arrange
            var user = new LibraryUser
            {
                Id = 1,
                UserName = "User",
                Email = "user@test.pl"
            };

            var book1 = new Book
            {
                id = 1,
                autor = "Tolkien",
                tytul = "Lords of the ring"
            };

            var book2 = new Book
            {
                id = 2,
                autor = "Tolkien",
                tytul = "Hobbit"
            };

            var rental = new RentalHistory
            {
                UserId = 1,
                BookId = 1,
                Book = book1,
                StartDate = DateTime.UtcNow
            };


            var options = new DbContextOptionsBuilder<AppDbContext>()
                .Options;

            var contextMock = new Mock<AppDbContext>(options);

            

            contextMock
                .Setup(x => x.Users)
                .ReturnsDbSet(new List<LibraryUser>
                {
                    user
                });

            contextMock
                .Setup(x => x.RentalHistories)
                .ReturnsDbSet(new List<RentalHistory>
                {
                    rental
                });

            contextMock
                .Setup(x => x.books)
                .ReturnsDbSet(new List<Book>
                {
                    book1,
                    book2
                });

            var service = new RecommendService(contextMock.Object);

            // Act
            var result = await service.GetRecommendedUsers("User");

            // Assert
            Assert.Equal("Hobbit", result[0].tytul);
           
        }
    }
}