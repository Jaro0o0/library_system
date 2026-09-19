namespace Library_Api.Models
{
    public class User
    {
        public int Id { get; set; }

        public string Username { get; set; } = "";

        public string Email { get; set; } = "";

        public string PasswordHash { get; set; } = "";
    }

    public class RegisterDto
    {
        public string Username { get; set; } = "";

        public string Email { get; set; } = "";

        public string Password { get; set; } = "";
    }
}