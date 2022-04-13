using Microsoft.AspNetCore.Mvc;
using FureverFriends.Models;

namespace FureverFriends.Controllers;

[ApiController]
[Route("[controller]")]
public class DogsController : ControllerBase
{
    private readonly ILogger<DogsController> _logger;

    private dbContext _database = new dbContext();

    public DogsController(ILogger<DogsController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public Dog Get(int Id)
    {
        return _database.Dogs.Where(x => x.Id == Id).FirstOrDefault();
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