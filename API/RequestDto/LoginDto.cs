using System;
using System.ComponentModel.DataAnnotations;

namespace API.RequestDto;

public class LoginDto
{
    [Required]
    [EmailAddress]
    public string Email { get; set; }="";
    [Required]
    [MinLength(6)]
    public string password { get; set; }="";

}
