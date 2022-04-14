using Microsoft.AspNetCore.Mvc;
using FureverFriends.Models;

namespace FureverFriends.Controllers;

[ApiController]
[Route("[controller]")]
public class DogCrudController : ControllerBase
{
    private readonly ILogger<DogCrudController> _logger;

    private dbContext _database = new dbContext();

    private DogService _dogService = new DogService();

    public DogCrudController(ILogger<DogCrudController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    [Route("GetDog")]
    public Dog Get(int Id)
    {
        return _dogService.GetDog(Id);
    }

    [HttpGet]
    [Route("GetDogs")]

    public List<Dog> Get()
    {
        return _dogService.GetDogs();
    }

    [HttpPost]
    public async Task<Dog> Post(Dog dog)
    {
        await _database.Dogs.AddAsync(dog);
        await _database.SaveChangesAsync();

        return dog;
    }

    [HttpPut]
    public async Task<Dog> Put(Dog dog)
    {
        _database.Dogs.Update(dog);
        await _database.SaveChangesAsync();

        return dog;
    }

    [HttpDelete]
    public async Task Delete(int Id)
    {
        var dog = _database.Dogs.Where(x => x.Id == Id).FirstOrDefault();

        _database.Dogs.Remove(dog);
        await _database.SaveChangesAsync();
    }
}