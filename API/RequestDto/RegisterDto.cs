using System;
using System.ComponentModel.DataAnnotations;

namespace API.RequestDto;

public class RegisterDto
{
    [Required]
    public string Username { get; set; }="";

[Required]
[EmailAddress]
    public string Email { get; set; }="";

[Required]
[MinLength(6)]
public string password { get; set; }="";
}
