using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Library_Api.Services;
using MyProject.Data;

[ApiController]
[Route("images/[controller]")]
public class ImagesController :  ControllerBase
{
    private readonly  AppDbContext _context;

    
    public ImagesController(AppDbContext context)
    {
        _context = context;
    }


    [HttpGet]
    public  async Task<IActionResult> GetBookImage(string title)
    {
        var image = await _context.Set<Image>()
            .FirstOrDefaultAsync(image => image.Id ==
                _context.books
                    .Where(book => book.tytul == title)
                    .Select(book => book.ImageId)
                    .FirstOrDefault());

        if(image == null)
        {
            return NotFound();
        }

        return File(image.ImageData, image.ContentType);

    }

}
