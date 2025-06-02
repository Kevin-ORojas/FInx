using Backend.Models;
using System.Collections.Generic;
using System.Linq;


namespace Backend.Services {
    public class UserService {
        private readonly List<User> _users = new(){
            new User {Id = 1, Name = "Alice", Email ="alice@gmail.com", PasswordHash = "hashed_password", CreatedAt = DateTime.UtcNow},
             new User {Id = 1, Name = "Alexa", Email ="Alexa@gmail.com", PasswordHash = "hashed_password", CreatedAt = DateTime.UtcNow}
        };

            public IEnumerable<User> GetUsers() => _users;

            public User? GetUserById(int id) => _users.FirstOrDefault(u => u.Id == id);

            public User CreateUser (User newUser) {
                newUser.Id = _users.Max(u => u.Id) +1;
                newUser.CreatedAt = DateTime.UtcNow;
                _users.Add(newUser);
                return newUser;
            }
        
    }
}