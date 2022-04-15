namespace FureverFriends.Models
{
    public partial class Friendship
    {
        public int Id { get; set; }
        public int DogOneId { get; set; }
        public string? DogOneName { get; set; }
        public int DogTwoId { get; set; }
        public string? DogTwoName  { get; set; }
        public int FriendshipTypeId  { get; set; }
    }
}
