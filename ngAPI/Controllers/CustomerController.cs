using System.Linq;
using Microsoft.AspNetCore.Mvc;
using ngAPI.Models;

namespace ngAPI.Controllers
{
    [Route("api/[controller]")]
    public class CustomerController : Controller
    {
        private readonly ApiContext _ctx;

        public CustomerController(ApiContext context)
        {
            context = _ctx;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var data = _ctx.Customers.OrderBy(c => c.Id);

            return Ok(data);
        }


        // Get api/Customer/5
        [HttpGet("{id}", Name = "Get")]
        public IActionResult GetCustomer(int id)
        {
            var customer = _ctx.Customers.Find(id);

            return Ok(customer);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Customer customer)
        {
            if (customer == null)
            {
                return BadRequest();
            }

            _ctx.Customers.Add(customer);
            _ctx.SaveChanges();

            return CreatedAtRoute("Get", new { id = customer.Id}, customer);
        }
    }
}