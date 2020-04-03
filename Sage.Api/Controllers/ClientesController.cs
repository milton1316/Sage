using Microsoft.AspNetCore.Mvc;
using Sage.Data.Repositories;
using Sage.Domain.Entities;
using Sage.Domain.Interfaces;
using Sage.Domain.Validators;
using System.Collections.Generic;

namespace Sage.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientesController : ControllerBase
    {
        private readonly IClienteRepository _repository;
        private readonly ClienteValidator _validator;

        public ClientesController(IClienteRepository repository, ClienteValidator validator)
        {
            _repository = repository;
            _validator = validator;
        }

        [HttpGet]
        public ActionResult<List<Cliente>> Get()
        {
            var clientes = _repository.List();
            return Ok(clientes);
        }

        [HttpGet("{id}")]
        public ActionResult<Cliente> Get(int id)
        {
            return Ok(_repository.Get(id));
        }

        [HttpPost]
        public ActionResult<Cliente> Post([FromBody] Cliente cliente)
        {
            var validacao = _validator.Validate(cliente);            
            if (validacao.IsValid)
                return Ok(_repository.Add(cliente));
            else
                return BadRequest(validacao.Errors);
        }

        [HttpPut("{id}")]
        public ActionResult<Cliente> Put(int id, [FromBody] Cliente cliente)
        {
            if (id == 0)
                BadRequest("O cliente informado não é valido");

            cliente.Id = id;

            var validacao = _validator.Validate(cliente);
            if (validacao.IsValid)
                return Ok(_repository.Update(cliente));
            else
                return BadRequest(validacao.Errors);
        }

        [HttpDelete("{id}")]
        public ActionResult<bool> Delete(int id)
        {
            if (id == 0)
                BadRequest("O cliente informado não é valido");

            return Ok(_repository.Delete(new Cliente { Id = id }));
        }
    }
}
