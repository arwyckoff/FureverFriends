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

    [Route("DeleteFriendship")]
    [HttpPost]
    public async Task<int> DeleteFriendship(int FriendshipId)
    {
        await _friendshipService.DeleteFriendship(FriendshipId);

        return FriendshipId;
    }

    [Route("CreateEditFriendship")]
    [HttpPost]
    public async Task<Friendship> CreateEditFriendship(Friendship friendship)
    {
        await _friendshipService.CreateEditFriendship(friendship);

        return friendship;
    }

    [Route("GetAllFriendships")]
    [HttpGet]
    public List<Friendship> GetFriendships()
    {

        return _friendshipService.GetFriendships();
    }

    [Route("GetFriendshipsForDog")]
    [HttpGet]
    public List<Friendship> GetFriendship(int dogId)
    {

        return _friendshipService.GetFriendships(dogId);
    }


}