using System.Security.Cryptography.X509Certificates;

namespace Backend.Models;

public class User
{
    public int Id { get; set; }
    public required string Name { get; set; }
    public required string Email { get; set; }
    public required string PasswordHash { get; set; }
    public required DateTime CreatedAt { get; set; } = DateTime.UtcNow;

}