using System.Security.Cryptography.X509Certificates;

namespace Backend.Models;

public class User
{
    public int Id { get; set; }
    public required string Name { get; set; } = string.Empty;
    public required string Email { get; set; } = string.Empty;
    public required string PasswordHash { get; set; } = string.Empty;
    public required DateTime CreatedAt { get; set; } = DateTime.UtcNow;

}