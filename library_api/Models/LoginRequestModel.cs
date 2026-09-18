namespace Backend.Models
{
    

    public class LoginRequestModel
    {
        public string? UserName {get; set;}
        public string? AccesToken {get; set;}

        public int ExpiresIn {get; set;}
    }



    public class LoginCredentialsModel
    {
        public string? UserName { get; set; }
        public string? Password { get; set; }
    }

    public class RegisterRequestModel
    {
        public string? UserName { get; set; }
        public string? Email { get; set; }
        public string? Password { get; set; }
}

}