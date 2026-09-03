using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Library_Api.Models;
using Microsoft.IdentityModel.Tokens;
using MyProject.Data;

namespace Library_Api.Services
{
    public class JwtService
    {
        private readonly IConfiguration _configuration;

        public JwtService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public LoginRequestModel GenerateToken(LibraryUser user)
        {
            var validityMinutes = _configuration.GetValue<int>("JtwConfig:TokenValidityMins");
            var expiresAt = DateTime.UtcNow.AddMinutes(validityMinutes);
            var key = _configuration["JtwConfig:Key"]
                ?? throw new InvalidOperationException("JWT signing key is missing.");

            var token = new JwtSecurityToken(
                issuer: _configuration["JtwConfig:Issuer"],
                audience: _configuration["JtwConfig:Audience"],
                claims:
                [
                    new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                    new Claim(ClaimTypes.Name, user.UserName)
                ],
                expires: expiresAt,
                signingCredentials: new SigningCredentials(
                    new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key)),
                    SecurityAlgorithms.HmacSha256));

            return new LoginRequestModel
            {
                UserName = user.UserName,
                AccesToken = new JwtSecurityTokenHandler().WriteToken(token),
                ExpiresIn = validityMinutes * 60
            };
        }
    }
}
