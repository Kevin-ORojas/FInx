
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
// este archivo se encargara de manejar las peticiones /api/user

[Route("api/[controller]")] // indica que las rutas van a comenzar con /api/users [controller]: se remplzaa automaticamente por el nombre del controlador.

[ApiController]// esti le dice asp.net core que es un controlador de tipo api

public class UsersController : ControllerBase // contiene funciones basicas como (devolver datos, manejar errores. etc)
{
    private readonly ApplicationDbContext _context; // se declara una variable privada que va hacer _context sera tu acceso a la db

    public UsersController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet] // esto se ejecuta cuando alguien haga una peticion GET /api/users

    public async Task<ActionResult<IEnumerable<User>>> GetUser()
    {
        return await _context.Users.ToListAsync();
    }
}




