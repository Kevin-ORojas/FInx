using Microsoft.AspNetCore.Mvc;
using Backend.Services;
using Backend.Models;
using System.Collections.Generic;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly UserService _userService;
        private readonly TokenService _tokenService;


        public UserController(UserService userService, TokenService tokenService) // Inyección correcta
        {
            _userService = userService; // Asignación correcta
            _tokenService = tokenService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<User>> GetUsers()
        {
            return Ok(_userService.GetUsers()); // Ok() con mayúscula
        }

        [HttpGet("{id}")]
        public ActionResult<User> GetUserById(int id)
        {
            var user = _userService.GetUserById(id);
            if (user == null) return NotFound();
            return Ok(user);
        }

        [HttpPost]
        public ActionResult<User> CreateUser([FromBody] User newUser)
        {
            if (newUser == null) return BadRequest("User data is required.");

            var createdUser = _userService.CreateUser(newUser);
            var token = _tokenService.GenerateToken(createdUser);

            return Ok(new
            {
                token,
                user = new
                {
                    id = createdUser.Id,
                    name = createdUser.Name,
                    email = createdUser.Email
                }
            });

            // return CreatedAtAction(nameof(GetUserById), new { id = createdUser.Id }, createdUser);
        }

        [HttpPost("auth/login")]
        public ActionResult<object> Login([FromBody] LoginRequest request)
        {
            var user = _userService.GetUserByEmail(request.Email);
            if (user == null) return Unauthorized("Invalid email or password.");


            bool isPasswordValid = _userService.VerifyPassword(request.Password, user.PasswordHash);
            if (!isPasswordValid) return Unauthorized("Invalid email or password.");

            var token = _tokenService.GenerateToken(user);

            return Ok(new
            {
                token,
                user = new { user.Id, user.Name, user.Email }
            });
        }
    }
}