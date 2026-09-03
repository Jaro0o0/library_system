using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyProject.Data;


[Authorize]
[ApiController]
[Route("api/auth")]
public class AccountController  : ControllerBase
{
    
}