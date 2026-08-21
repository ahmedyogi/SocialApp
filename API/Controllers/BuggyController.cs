using System;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class BuggyController : ControllerBase
{


    [HttpGet("auth")]
    public IActionResult getAuth()
    {
        return Unauthorized();
    }
    [HttpGet("not-found")]
    public IActionResult getNotFound()
    {
        return NotFound();
    }
    [HttpGet("server-error")]
    public IActionResult getServerError()
    {
        throw new Exception("this is a server error");
    }
    [HttpGet("bad-request")]
    public IActionResult getBadREquest()
    {
        return BadRequest();
    }

}
