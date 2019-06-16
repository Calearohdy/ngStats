using System;
using System.Collections.Generic;
using System.Linq;
using ngAPI.Helpers;
using ngAPI.Models;

namespace ngAPI
{
    public class DataSeed
    {
        private readonly ApiContext _context;

        public DataSeed(ApiContext context)
        {
            _context = context;
        }

        public void SeedData(int nCustomers, int nOrders)
        {
            if (!_context.Customers.Any())
            {
                SeedCustomers(nCustomers); // insert into db
            }
            if (!_context.Orders.Any())
            {
                SeedOrders(nOrders); // insert into db
            }
            if (!_context.Servers.Any())
            {
                SeedServers();
            }

            _context.SaveChanges();
        }

        private void SeedOrders(int nOrders)
        {
            List<Order> orders = BuildOrdersList(nOrders);

            foreach(var order in orders)
            {
                _context.Orders.Add(order);
            }
        }

        private void SeedCustomers(int nCustomers)
        {
            List<Customer> customers = BuildCustomerList(nCustomers);

            foreach(var customer in customers)
            {
                _context.Customers.Add(customer);
            }
        }

        private List<Customer> BuildCustomerList(int nCustomers)
        {
            var customers = new List<Customer>();

            for(var i = 1; i <= nCustomers; i++)
            {
                var name = SeedHelper.MakeCustomerName();
                customers.Add(new Customer {
                    Id = i,
                    Name = name,
                    Email = SeedHelper.MakeCustomerEmail(name),
                    State = SeedHelper.MakeCustomerState()
                });
            }

            return customers;
        }

        private List<Order> BuildOrdersList(int nOrders)
        {
            var orders = new List<Order>();
            var rand = new Random();

            for(var i = 1; i <= nOrders; i++)
            {
                var placed = SeedHelper.GetPlaced();
                var randCustomerId = rand.Next(_context.Customers.Count());
                var completed = SeedHelper.GetCompletedOrder(placed);

                orders.Add(new Order {
                    Id = i,
                    Customer = _context.Customers.First(c => c.Id == randCustomerId),
                    Amount = SeedHelper.GetTotalAmount(),
                    Placed = placed,
                    Completed = completed
                });
            }

            return orders;
        }

        private List<Server> BuildServerList()
        {
            return new List<Server>()
            {
                new Server {
                    Id = 1,
                    Name = "Dev",
                    Online = true
                },
                new Server {
                    Id = 2,
                    Name = "Prod",
                    Online = true
                },
                new Server {
                    Id = 3,
                    Name = "QA",
                    Online = true
                },
                new Server {
                    Id = 4,
                    Name = "Test",
                    Online = true
                }
            };
        }

        private void SeedServers()
        {
            List<Server> servers = BuildServerList();

            foreach (var server in servers)
            {
                _context.Servers.Add(server);
            }
        }
    }
}