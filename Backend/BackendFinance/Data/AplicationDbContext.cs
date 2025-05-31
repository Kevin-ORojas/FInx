using Microsoft.EntityFrameworkCore;

// crea un puente entre tu aplicacion y la bade de datos usando entity framework
public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        { }

    public DbSet<User> Users { get; set; }
}


