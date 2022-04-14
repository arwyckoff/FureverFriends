using FureverFriends.Models;

namespace FureverFriends.Controllers;
public class DogService
{
    private readonly ILogger<DogCrudController> _logger;
    private dbContext _database = new dbContext();
    public DogService()
    {
    
    }

    public Dog GetDog(int Id)
    {
      return _database.Dogs.Where(x => x.Id == Id).FirstOrDefault();
    }

    public List<Dog> GetDogs()
    {
      return _database.Dogs.ToList();
    }
}
