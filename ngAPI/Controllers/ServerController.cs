using System.Linq;
using Microsoft.AspNetCore.Mvc;
using ngAPI.Models;

namespace ngAPI.Controllers
{
    [Route("api/[controller]")]
    
    public class ServerController : Controller
    {
        private readonly ApiContext _context;
        public ServerController(ApiContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var response = _context.Servers.OrderBy(s => s.Id).ToList();

            return Ok(response);
        }

        [HttpGet("{id}")]
        public IActionResult GetServer(int id)
        {
            var response = _context.Servers.Find(id);

            return Ok(response);
        }

        [HttpPut("{id}")]
        public IActionResult Message(int id, [FromBody] ServerMessage msg)
        {
            var server = _context.Servers.Find(id);
            var serverControl = server.Online;

            if (server == null)
            {
                return NotFound();
            }

            if (msg.Payload == "activate")
            {
                server.Online = !server.Online;
                _context.SaveChanges();
            }
            else if (msg.Payload == "deactivate")
            {
                server.Online = !server.Online;
                _context.SaveChanges();
            }

            return Ok();
        }
    }
}