using Microsoft.AspNetCore.Mvc;
using ngAPI.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System;

namespace ngAPI.Controllers
{
    [Route("api/[controller]")]
    public class OrderController : Controller
    {

        private readonly ApiContext _context;

        public OrderController(ApiContext context)
        {
            context = _context;
        }

        //Get api/order/pageNumber/pageSize
        [HttpGet("{pageIndex: int}/{pageSize: int}")]
        public IActionResult Get(int pageIndex, int pageSize)
        {
            var data = _context.Orders.Include(o => o.Customer).OrderByDescending(c => c.Placed);

            var page = new PaginatedResponse<Order>(data, pageIndex, pageSize);

            var totalCount = data.Count();
            var totalPages = Math.Ceiling((double)totalCount / pageSize);

            var response = new {
                Page = page,
                TotalPages = totalPages
            };

            return Ok(response);
        }

        [HttpGet("ByState")]
        public IActionResult ByState()
        {
            var orders = _context.Orders.Include(o => o.Customer).ToList();

            var groupResult = orders.GroupBy(o => o.Customer.State)
                .ToList()
                .Select(grp => new {
                    State = grp.Key,
                    Amount = grp.Sum(x => x.Amount)
                }).OrderByDescending(res => res.Amount).ToList();
            
            return Ok(groupResult);
        }

        [HttpGet("ByCustomer/{n}")]
        public IActionResult ByCustomer(int numberOfCustomers)
        {
            var orders = _context.Orders.Include(o => o.Customer).ToList();

            var groupResult = orders.GroupBy(o => o.Customer.Id)
                .ToList()
                .Select(grp => new {
                    Name = _context.Customers.Find(grp.Key).Name,
                    Amount = grp.Sum(x => x.Amount)
                }).OrderByDescending(res => res.Amount)
                .Take(numberOfCustomers)
                .ToList();
            
            return Ok(groupResult);
        }

        [HttpGet("GetOrder/{id}", Name = "GetOrder")]
        public IActionResult GetOrder(int id)
        {
            var order =_context.Orders.Include(o => o.Customer).First(o => o.Id == id);

            return Ok(order);
        }

    }
}