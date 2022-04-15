using FureverFriends.Models;

namespace FureverFriends.Controllers;
public class FriendshipService
{
    private readonly ILogger<FriendshipCrudController> _logger;
    private dbContext _database = new dbContext();
    public FriendshipService()
    {
      
    }
  
    public async Task<int> DeleteFriendship(int FriendshipId)
    {
      var friendship = _database.Friendships.Where(x => x.Id == FriendshipId).FirstOrDefault();
      if (friendship != null)
      {
        _database.Friendships.Remove(friendship);
        await _database.SaveChangesAsync();

        return FriendshipId;
      }
      else
      {
        throw new InvalidOperationException("Cannot find friendship");
      }
    }
  
    public async Task<Friendship> CreateEditFriendship(Friendship friendship)
    {
      bool isUpdate = _database.Friendships.Any(x => x.Id == friendship.Id);
      if (isUpdate)
      {
        _database.Friendships.Update(friendship);
        await _database.SaveChangesAsync();
      }
      else
      {
        await _database.Friendships.AddAsync(friendship);
        await _database.SaveChangesAsync();
      }

      return friendship;
    }

    public List<Friendship> GetFriendships (int? Id = null)
    {
      if (Id.HasValue)
      {
        int dogId = Id.Value;
        var friendShips = _database.Friendships.Where(x => x.DogOneId == Id || x.DogTwoId == Id).ToList();
        
        return friendShips;
      }
      else 
      {

      return _database.Friendships.ToList();
      }
    }
}
