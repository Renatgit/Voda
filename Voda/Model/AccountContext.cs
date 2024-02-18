using Microsoft.EntityFrameworkCore;

namespace Voda.Model
{
    public class AccountContext : DbContext
    {
        public DbSet<User> tblUsers { get; set; }
        public AccountContext(DbContextOptions options) : base(options)
        {

        }
    }
}
