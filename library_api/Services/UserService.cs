
public interface IRegisterService
{
    void CheckUser();
}

public class UserService : IRegisterService
{
    public void CheckUser()
    {
        Console.WriteLine("Checking if user exists...");
    }
}