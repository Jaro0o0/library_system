// public class  RentBook
// {
//     public DatTime RentDate {get; set;}
//     public string BookName {get; set;}
//     public string Description {get; set;}
//     public string Author {get;set;}
//     public bool IsRented {get; set;}




// }

// [APiController]

// [Route("rent[controller]")]

// public class RentBookController : ControllerBase
// {

//     private static readonly string[] Categories = new {
//         "Action","Biography","Fantasy","SCI_FI"

//     }

//     //Methods
//     [HttpGet]
//     public IEnumerable<RentBook> Get(){

//         var rng = new Random();

//         return Enumerable.Range(1,5).Select(index => new RentBook {

//             //5 days
//             RentDate = DataTime.Now().AddDays(5);
//             Description =  Categories[rng.Next(Categories[Categories.Lengh()])]

//         } ).ToList();
//     }

//     //Post
//     [HttpPost]
//     public IsActionResult Post([FromBody] RentBook book){

//         return OK(book);
//     }

//     //Delete
//     [HttpDelete("{id}")]
//     public IsActionResult Delete(int id){
//         return NonContent();
//     }
// }