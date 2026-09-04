// using Microsoft.AspNetCore.Mvc;
// using MyProject.Data;


// public class RecommendService
// {
//     private readonly LibraryDbContext _context;

//     public RecommendService(LibraryDbContext context)
//     {
//         _context = context;
//     }

//     public List<LibraryUser> GetRecommendedUsers(int userId, int count)
//     {
//         var recommendedUsers = _context.LibraryUsers
//             .Where(u => u.Id != userId) 
//             .OrderBy(u => Guid.NewGuid()) 
//             .Take(count) 
//             .ToList();

            

       
//     }


// }