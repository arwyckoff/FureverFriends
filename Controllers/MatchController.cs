using Microsoft.AspNetCore.Mvc;
using FureverFriends.Models;

namespace FureverFriends.Controllers;

[ApiController]
[Route("[controller]")]
public class MatchController : ControllerBase
{
    private readonly ILogger<MatchController> _logger;

    private dbContext _database = new dbContext();

    private MatchService _matchService = new MatchService();

    public MatchController(ILogger<MatchController> logger)
    {
        _logger = logger;
    }

    [Route("MatchDogs")]
    [HttpPost]
    public void Post(int DogOneId, int DogTwoId, int MatchTypeId)
    {
        _matchService.MatchDogs(DogOneId, DogTwoId, MatchTypeId);
    }


}