using Microsoft.EntityFrameworkCore;
using Sage.Domain.Entities;
using System.ComponentModel.DataAnnotations.Schema;

namespace Sage.Data.Mappers
{
    internal static class EnderecoMap
    {
        internal static void Map(ModelBuilder modelBuilder)
        {
            var model = modelBuilder.Entity<Endereco>();
            model.ToTable("Enderecos");
            model.HasKey(x => x.Id).HasAnnotation("DatabaseGenerated", DatabaseGeneratedOption.Identity);
            model.Property(x => x.Logradouro).IsRequired();
            model.Property(x => x.Numero);
            model.Property(x => x.Cep).IsRequired();
            model.Property(x => x.Bairro).IsRequired();
            model.Property(x => x.Cidade).IsRequired();
            model.Property(x => x.Estado).IsRequired();                        
        }
    }
}
