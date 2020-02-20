using Microsoft.AspNetCore.Mvc;
using Sage.Data.Repositories;
using Sage.Domain.Entities;
using System.Collections.Generic;

namespace Sage.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientesController : ControllerBase
    {
        private readonly ClienteRepository _clienteRepository;

        public ClientesController(ClienteRepository clienteRepository)
        {
            _clienteRepository = clienteRepository;
        }

        [HttpGet]
        public IEnumerable<Cliente> Get()
        {
            return _clienteRepository.Listar();            
        }

        [HttpGet("{id}")]
        public Cliente Get(int id)
        {
            return _clienteRepository.Obter(id);
        }

        [HttpPost]
        public Cliente Post([FromBody] Cliente cliente)
        {
            return _clienteRepository.Incluir(cliente);
        }

        [HttpPut("{id}")]
        public Cliente Put(int id, [FromBody] Cliente cliente)
        {
            return _clienteRepository.Atualizar(cliente);
        }

        [HttpDelete("{id}")]
        public bool Delete(int id)
        {
            return _clienteRepository.Excluir(id);
        }
    }
}
