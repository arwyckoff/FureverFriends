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
      var dog = _database.Dogs.Where(x => x.Id == Id).FirstOrDefault();
      if (dog == null)
      {
        throw new InvalidOperationException("Cannot find dog");
      }
      else
      {
        return dog;
      }
    }

    public List<Dog> GetDogs()
    {
      return _database.Dogs.ToList();
    }

  
    public List<Dog> SearchDogs(string term)
    {
      return _database.Dogs.Where(dog => dog.Name == term || dog.Name.Contains(term)).ToList();
    }

    public async Task<Dog> CreateOrUpdateDog(Dog dog)
    {
      bool isUpdate = _database.Dogs.Any(x => x.Id == dog.Id);
      if (isUpdate)
      {
        _database.Dogs.Update(dog);
        await _database.SaveChangesAsync();
      }
      else
      {
        await _database.Dogs.AddAsync(dog);
        await _database.SaveChangesAsync();
      }

      return dog;
    }

    public async Task<int> DeleteDog(int Id)
    {
      var dog = _database.Dogs.Where(x => x.Id == Id).FirstOrDefault();
      if (dog != null)
      {
        _database.Dogs.Remove(dog);
        await _database.SaveChangesAsync();

        return Id;
      }
      else
      {
        throw new InvalidOperationException("Cannot find dog");
      }

    }
}
