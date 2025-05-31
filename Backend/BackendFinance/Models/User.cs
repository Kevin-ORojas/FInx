using System;

public class User
{
    public int Id { get; set; } // identificador unico en la tabla
    public required string Name { get; set; } // Nombre del usuario
    public required string Email { get; set; } // Nombre del email
    public required string PasswordHash { get; set; } // Contraseña encriptada
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow; // guarda la fecha de la creacion.
}