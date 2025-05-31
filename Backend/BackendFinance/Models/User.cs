public class User
{
    public int Id { get; set; } // identificador unico en la tabla
    public string Name { get; set; } // Nombre del usuario
    public string Email { get; set; } // Nombre del email
    public string PasswordHash { get; set; } // Contraseña encriptada
    public DateTime CreateAt { get; set; } // creata fecha actual
}