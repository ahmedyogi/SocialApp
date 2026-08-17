using System;
using API.Entities;
using API.Interfaces;
using API.RequestDto;

namespace API.Extensions;

public static class AppUserExtension
{
    public static UserDto ToDto(this AppUser user,ITokenService tokenService)
    {
        return new UserDto
            {
                Id = user.Id,
                Username = user.Username,
                Email = user.Email,
                token = tokenService.CreateToken(user)
            };
    }
}
