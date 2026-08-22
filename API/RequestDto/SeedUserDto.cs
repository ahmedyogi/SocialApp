using System;

namespace API.RequestDto;

public class SeedUserDto
{
    public required string Id { get; set; } = null!;
    public required string Email { get; set; }
    public DateOnly dateOfBirth { get; set; }
    public string? ImageUrl { get; set; }
    public required string Username { get; set; }
    public DateTime Created { get; set; } = DateTime.UtcNow;
    public DateTime LastActive { get; set; } = DateTime.UtcNow;
    public required string Gender { get; set; }
    public string? Description { get; set; }
    public string? City { get; set; }
    public string? Country { get; set; }
}
