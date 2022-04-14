using FureverFriends.Models;

namespace FureverFriends.Controllers;
public class MatchService
{
    private readonly ILogger<MatchController> _logger;
    private dbContext _database = new dbContext();
    public MatchService()
    {
      
    }
  
    public void MatchDogs(int DogOneId, int DogTwoId, int MatchTypeId)
    {
      
    }
}
