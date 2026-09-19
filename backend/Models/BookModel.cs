namespace  Backend.Models
{
    public class Book
    {
        public int id { get; set; }
        public string tytul { get; set; } = "";
        public string autor { get; set; } = "";
        public string? gatunek { get; set; }

        public bool IsRented {get; set;} = false;

        public DateTime StartDate {get; set;}

        public DateTime  EndDate {get; set;}

        public int? ImageId { get; set; }

        public ICollection<RentalHistory> RentalHistories { get; set; }
            = new List<RentalHistory>();
    }
}