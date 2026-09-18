namespace Backend.Models
{
    public class Image
    {
        public int Id { get; set; }
        public required byte[] ImageData { get; set; }
        public required string ContentType { get; set; }
    }
}