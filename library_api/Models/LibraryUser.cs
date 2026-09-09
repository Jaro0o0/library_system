public class LibraryUser
{
    public int Id { get; set; }
    public string UserName { get; set; } = "";
    public string PasswordHash { get; set; } = "";
    public DateTime CreatedAtUtc { get; set; } = DateTime.UtcNow;
    public ICollection<Author> FavoriteAuthors { get; set; } = new List<Author>();
}
