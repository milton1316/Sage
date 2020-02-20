using Sage.Domain.Entities.Enums;
using System;
using System.Collections.Generic;

namespace Sage.Domain.Entities
{
    public class Cliente
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Sobrenome { get; set; }
        public string Cpf { get; set; }
        public DateTimeOffset DataNascimento { get; set; }
        public EstadoCivilEnum EstadoCivil { get; set; }
        public virtual ICollection<Endereco> Enderecos { get; set; }
    }
}
