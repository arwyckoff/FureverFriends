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
}