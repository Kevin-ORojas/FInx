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

        public UserController(UserService userService) // Inyección correcta
        {
            _userService = userService; // Asignación correcta
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
            if(newUser == null)
            {
                return BadRequest("User data is required.");
            }
            var createdUser = _userService.CreateUser(newUser);
            return CreatedAtAction(nameof(GetUserById), new { id = createdUser.Id }, createdUser);
        }
    }
}