using Microsoft.EntityFrameworkCore;
using Sage.Data.Mappers;
using Sage.Domain.Entities;
using System;

namespace Sage.Data
{
    public class Contexto : DbContext
    {
        public Contexto(DbContextOptions<Contexto> options): base(options)
        {   
        }

        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Endereco> Enderecos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            ClienteMap.Map(modelBuilder);
            EnderecoMap.Map(modelBuilder);
        }
    }
}
