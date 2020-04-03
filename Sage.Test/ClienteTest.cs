using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using Sage.Api.Controllers;
using Sage.Data.Repositories;
using Sage.Domain.Entities;
using Sage.Domain.Validators;
using System;
using System.Linq;
using System.Collections.Generic;
using Sage.Domain.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Sage.Domain.Entities.Enums;

namespace Sage.Test
{
    [TestClass]
    public class ClienteTest
    {
        private List<Cliente> ClientesStub()
        {
            return new List<Cliente>()
            {
                new Cliente
                { 
                    Id = 1, 
                    Nome = "Milton", 
                    Sobrenome = "Affonso",
                    Cpf = "364.527.558-46", 
                    DataNascimento = new DateTimeOffset(), 
                    EstadoCivil = EstadoCivilEnum.Solteiro
                }
            };
        }

        [TestMethod]
        public void Deve_Listar_Clientes()
        {
            var mockRepository = new Mock<IClienteRepository>();
            var mockValidator = new Mock<ClienteValidator>();

            mockRepository.Setup(x => x.List()).Returns(ClientesStub());

            var controller = new ClientesController(mockRepository.Object, mockValidator.Object);
            var result = controller.Get();           
        }
    }
}
