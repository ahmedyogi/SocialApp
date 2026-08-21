using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities;

public class AppUser
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public required string Username { get; set; }
    public required string Email { get; set; }
    public string?  ImageURl { get; set; }
    public required byte[] PasswordHash {get; set;}
    public required byte[] PasswordSalt { get; set; }
    // navigation property
    [ForeignKey(nameof(Id))]
    public Members Member { get; set; } = null!;
}
