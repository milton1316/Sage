using Sage.Domain.Entities;
using Sage.Domain.Entities.Enums;
using System;
using System.Linq;

namespace Sage.Data
{
    public static class DbInicializador
    {
        public static void Inicializar(Contexto contexto)
        {
            contexto.Database.EnsureCreated();

            if (contexto.Clientes.Any())
                return;

            contexto.Clientes.Add(new Cliente { Nome = "Milton", Sobrenome = "Nascimento Affonso", Cpf = "364.527.558-46", DataNascimento = new DateTimeOffset(1987, 4, 6, 0, 0, 0, TimeSpan.Zero), EstadoCivil = EstadoCivilEnum.Solteiro });
            contexto.Clientes.Add(new Cliente { Nome = "Marley", Sobrenome = "Thompson", Cpf = "048.796.130-70", DataNascimento = new DateTimeOffset(2016, 6, 26, 0, 0, 0, TimeSpan.Zero), EstadoCivil = EstadoCivilEnum.Solteiro });
            contexto.Clientes.Add(new Cliente { Nome = "Tonia", Sobrenome = "Maria da Silva", Cpf = "247.084.910-18", DataNascimento = new DateTimeOffset(2009, 8, 23, 0, 0, 0, TimeSpan.Zero), EstadoCivil = EstadoCivilEnum.Casado });

            //contexto.SaveChanges();

            contexto.Enderecos.Add(new Endereco { ClienteId = 1, Logradouro = "Avenida João Messias", Numero = "910", Bairro = "Pq. das Videiras", Cep = "13240-000", Cidade = "Jarinu", Estado = EstadoEnum.SaoPaulo });
            contexto.Enderecos.Add(new Endereco { ClienteId = 2, Logradouro = "Rua Joaquim José", Numero = "43", Bairro = "Centro", Cep = "13860-970", Cidade = "Aguaí", Estado = EstadoEnum.SaoPaulo });
            contexto.Enderecos.Add(new Endereco { ClienteId = 3, Logradouro = "Estrada Francisco Neto", Numero = "8952", Bairro = "Vila Santa Teresa", Cep = "26193-260", Cidade = "Belford Roxo", Estado = EstadoEnum.RioDeJaneiro });

            contexto.SaveChanges();
        }
    }
}
