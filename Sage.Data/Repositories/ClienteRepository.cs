using Sage.Domain.Entities;
using System.Collections.Generic;
using System.Linq;

namespace Sage.Data.Repositories
{
    public class ClienteRepository
    {
        private readonly Contexto _contexto;

        public ClienteRepository(Contexto contexto)
        {
            _contexto = contexto;
        }

        public Cliente Incluir(Cliente cliente)
        {
            _contexto.Add(cliente);
            _contexto.SaveChanges();
            return cliente;
        }

        public Cliente Atualizar(Cliente cliente)
        {
            _contexto.Update(cliente);
            _contexto.SaveChanges();
            return cliente;
        }

        public bool Excluir(int id)
        {
            _contexto.Remove(new Cliente { Id = id });
            _contexto.SaveChanges();
            return true;
        }

        public Cliente Obter(int id)
        {
            return _contexto.Find<Cliente>(id);
        }

        public ICollection<Cliente> Listar()
        {
            return _contexto.Clientes.ToList();
        }
    }
}
