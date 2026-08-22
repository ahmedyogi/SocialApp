using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
[Authorize]

public class MembersController(IMemberRepository memberRepository) : ControllerBase
{
    [HttpGet] //https://localhost:7141/GetMembers
    public async Task<ActionResult<IReadOnlyList<Members>>> GetMembers()
    {

        return Ok(await memberRepository.GetMembersAsync());
    }
    [HttpGet("{id}")]
    public async Task<ActionResult<Members>> GetMember(string id)
    {
        var member = await memberRepository.GetMemberByIdAsync(id);
        if (member == null) return NotFound();
        return member;
    }
    [HttpGet("{id}/photos")]
    public async Task<ActionResult<IReadOnlyList<Photo>>> GetMemberPhotos(string id)
    {
        return Ok(await memberRepository.GetPhotosForMemberAsync(id));
    }
}
