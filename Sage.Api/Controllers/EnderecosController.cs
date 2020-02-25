using Microsoft.AspNetCore.Mvc;
using Sage.Data.Repositories;
using Sage.Domain.Entities;
using System.Collections.Generic;

namespace Sage.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EnderecosController : ControllerBase
    {
        private readonly Repository<Endereco> _repository;

        public EnderecosController(Repository<Endereco> repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public IEnumerable<Endereco> Get()
        {
            return _repository.List();
        }

        [HttpGet("{id}")]
        public Endereco Get(int id)
        {
            return _repository.Get(id);
        }

        [HttpPost]
        public Endereco Post([FromBody] Endereco endereco)
        {
            return _repository.Add(endereco);
        }

        [HttpPut("{id}")]
        public Endereco Put(int id, [FromBody] Endereco endereco)
        {
            return _repository.Update(endereco);
        }

        [HttpDelete("{id}")]
        public bool Delete(int id)
        {
            return _repository.Delete(new Endereco { Id = id });
        }
    }
}
