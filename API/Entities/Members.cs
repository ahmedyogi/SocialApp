
namespace API.Entities;

public class Members
{
    public string Id { get; set; } = null!;
    public DateOnly dateOfBirth { get; set; }
    public string? ImageURl { get; set; }
    public required string Username { get; set; }
    public DateTime Created { get; set; } = DateTime.UtcNow;
    public DateTime LastActive { get; set; } = DateTime.UtcNow;
    public required string  Gender { get; set; }
    public string? Description { get; set; }
    public string? City { get; set; }
    public string? Country { get; set; }
    // navigation property 
    public AppUser User { get; set; } = null!;
}
