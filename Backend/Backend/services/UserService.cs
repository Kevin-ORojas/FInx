using Backend.Models;
using System.Collections.Generic;
using System.Linq;
using BCrypt.Net;


namespace Backend.Services 
{
    public class UserService
     {
        private static readonly List<User> _users = new();
        
        public User CreateUser(User newUser)

        {
            newUser.Id = _users.Count + 1;
            newUser.CreatedAt = DateTime.UtcNow;

            // see Hash the password before the save!
            newUser.PasswordHash = BCrypt.Net.BCrypt.HashPassword(newUser.PasswordHash);

            _users.Add(newUser);
            return newUser;
        }
   
       public User? GetUserByEmail(string email)
       {
        return _users.FirstOrDefault(u => u.Email == email);
       }

       public bool VerifyPassword(string inputPassword, string storedHash)
       {
        return BCrypt.Net.BCrypt.Verify(inputPassword, storedHash);
        
       }

       public List<User> GetUsers(){
        return _users;
       }

       public User? GetUserById(int id)
       {
        return _users.FirstOrDefault(u => u.Id == id);
       }
        
    }
}