using Microsoft.EntityFrameworkCore;

namespace ngAPI.Models
{
    public class ApiContext : DbContext
    {
        public ApiContext(DbContextOptions<ApiContext> options) : base(options){}

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            => optionsBuilder.UseNpgsql("UserID=pDev;Password=Admin123;Server=localhost;Port=5432;Database=ngStats;IntegratedSecurity=true;Pooling=true;");

        public DbSet<Customer> Customers { get; set;}
        public DbSet<Order> Orders { get; set;}
        public DbSet<Server> Servers { get; set;}
    }
}