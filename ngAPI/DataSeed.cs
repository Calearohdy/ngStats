namespace ngAPI
{
    public class DataSeed
    {
        private readonly ApiContext _context

        public DataSeed(ApiContext context)
        {
            _context = context
        }

        public void SeedData(int nCustomers, int nOrders)
        {
            if (!_context.Customers.Any())
            {
                SeedCustomers(nCustomers);
            }
        }
    }
}