using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace Persistence
{
    public class DataContext : IdentityDbContext<AppUser>
    {

        // protected readonly IConfiguration Configuration;

        // public DataContext(IConfiguration configuration)
        // {
        //     Configuration = configuration;
        // }

        public DataContext(DbContextOptions options) : base(options) 
        {

        }

        public DbSet<Activity> Activities { get; set; }
        // public string DbPath { get; }

        // // The following configures EF to create a Sqlite database file in the
        // // special "local" folder for your platform.
        // protected override void OnConfiguring(DbContextOptionsBuilder options)
        //     => options.UseSqlite(Configuration.GetConnectionString("ConnStr"));

    }
}