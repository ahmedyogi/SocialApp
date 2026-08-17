using System;

namespace API.RequestDto;

public class UserDto
{
    public required string  Id { get; set; }
    public required string  Email { get; set; }
    public required string  Username { get; set; }
    public  string? ImageUrl { get; set; }
    public required string token { get; set; }

}
