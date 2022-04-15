using Microsoft.AspNetCore.Mvc;
using FureverFriends.Models;

namespace FureverFriends.Controllers;

[ApiController]
[Route("[controller]")]
public class FriendshipCrudController : ControllerBase
{
    private readonly ILogger<FriendshipCrudController> _logger;

    private dbContext _database = new dbContext();

    private FriendshipService _friendshipService = new FriendshipService();

    public FriendshipCrudController(ILogger<FriendshipCrudController> logger)
    {
        _logger = logger;
    }

    [Route("CreateEditFriendship")]
    [HttpPost]
    public void CreateEditFriendship(int DogOneId, int DogTwoId, int FriendshipTypeId)
    {
        _friendshipService.CreateEditFriendship(DogOneId, DogTwoId, FriendshipTypeId);
    }


}