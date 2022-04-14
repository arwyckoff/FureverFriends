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
    public Dog GetDog(int Id)
    {
        return _dogService.GetDog(Id);
    }

    [HttpGet]
    [Route("GetDogs")]

    public List<Dog> GetDogs()
    {
        return _dogService.GetDogs();
    }

    [HttpPost]
    [Route("SearchDogs")]
    public List<Dog> SearchDogs(string term)
    {
        return _dogService.SearchDogs(term);
    }
  
    [HttpPost]
    [Route("CreateOrUpdateDog")]
    public async Task<Dog> CreateOrUpdate(Dog dog)
    {
        await _dogService.CreateOrUpdateDog(dog);

        return dog;
    }

    [HttpDelete]
    [Route("DeleteDog")]
    public async Task<int> DeleteDog(int Id)
    {
        await _dogService.DeleteDog(Id);

        return Id;
    }
}