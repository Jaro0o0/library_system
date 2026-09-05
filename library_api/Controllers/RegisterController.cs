using Microsoft.AspNetCore.Mvc;
using MyProject.Data;
using Library_Api.Models;


[ApiController]
[Route("account/[controller]")]
public class RegisterController : ControllerBase
{
    private readonly AppDbContext _dbContext;
    private readonly IRegisterService _registerService;

    public RegisterController(AppDbContext dbContext, IRegisterService registerService)
    {
        _dbContext = dbContext;
        _registerService = registerService;
    }

    [HttpPost("register")]
    public IAsyncResult Register()
    {
      //Chcek is user already exiist   
    }
}