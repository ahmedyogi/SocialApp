using System.Security.Cryptography;
using System.Text;
using API.Data;
using API.Entities;
using API.Extensions;
using API.Interfaces;
using API.RequestDto;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController(AppDbContext context, ITokenService tokenService) : ControllerBase
    {


        // register function

        [HttpPost("register")]
        public async Task<ActionResult<UserDto>> register(RegisterDto registerDto)
        {
            if (await EmailExist(registerDto.Email)) return BadRequest("Email already Exist");
            using var hmac = new HMACSHA512();
            var user = new AppUser
            {
                Username = registerDto.Username,
                Email = registerDto.Email,
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDto.password)),
                PasswordSalt = hmac.Key
            };
            context.Users.Add(user);
            await context.SaveChangesAsync();
            return user.ToDto(tokenService);
        }


        // login function

        [HttpPost("Login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
        {
            var user = await context.Users.FirstOrDefaultAsync(x => x.Email == loginDto.Email);
            if (user == null) return Unauthorized("Email address is not found");
            using var hmac = new HMACSHA512(user.PasswordSalt);
            var ComputedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDto.password));
            for (int i = 0; i < ComputedHash.Length; i++)
            {
                if (ComputedHash[i] != user.PasswordHash[i]) return Unauthorized("Password is incorrect");
            }
            return user.ToDto(tokenService);
        }




        // helper fucntions
        private async Task<bool> EmailExist(string Email)
        {
            return await context.Users.AnyAsync(x => x.Email.ToLower() == Email.ToLower());
        }
    }
};
