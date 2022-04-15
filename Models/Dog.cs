namespace FureverFriends.Models
{
    public partial class Dog
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Breed { get; set; }
        public string? DateOfBirth { get; set; }
        public string? Interests { get; set; }
        public string? Description { get; set; }
        public string? Location { get; set; }
        public string? ImageURL { get; set; }
        public int? SizeId { get; set; }

        // public virtual Size Size { get; set; }
    }
}
