using FureverFriends.Models;

namespace FureverFriends.Controllers;
public class FriendshipService
{
    private readonly ILogger<FriendshipCrudController> _logger;
    private dbContext _database = new dbContext();
    public FriendshipService()
    {
      
    }
  
    public void CreateEditFriendship(int DogOneId, int DogTwoId, int MatchTypeId)
    {

    }
}
