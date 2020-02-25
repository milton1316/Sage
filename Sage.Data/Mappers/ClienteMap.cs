using Microsoft.EntityFrameworkCore;
using Sage.Domain.Entities;
using System.ComponentModel.DataAnnotations.Schema;

namespace Sage.Data.Mappers
{
    internal static class ClienteMap
    {
        internal static void Map(ModelBuilder modelBuilder)
        {
            var model = modelBuilder.Entity<Cliente>();
            model.ToTable("Clientes");
            model.HasKey(x => x.Id).HasAnnotation("DatabaseGenerated", DatabaseGeneratedOption.Identity);
            model.Property(x => x.Nome).IsRequired();
            model.Property(x => x.Sobrenome);
            model.Property(x => x.Cpf).IsRequired();
            model.Property(x => x.DataNascimento).IsRequired();
            model.Property(x => x.EstadoCivil).IsRequired();
            model.HasOne(x => x.Endereco).WithOne(x => x.Cliente).HasForeignKey<Endereco>(x => x.ClienteId).OnDelete(DeleteBehavior.Cascade);
        }
    }
}
