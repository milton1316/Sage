using Sage.Domain.Entities;
using Sage.Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Sage.Data.Repositories
{
    public class ClienteRepository : Repository<Cliente>, IClienteRepository
    {
        private readonly Contexto _contexto;

        public ClienteRepository(Contexto contexto) : base(contexto)
        {
            _contexto = contexto;
        }
    }
}
