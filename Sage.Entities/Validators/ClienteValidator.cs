using FluentValidation;
using Sage.Domain.Entities;
using Sage.Domain.Entities.Enums;
using System;

namespace Sage.Domain.Validators
{
    public class ClienteValidator : AbstractValidator<Cliente>
    {
        public ClienteValidator()
        {
            RuleFor(x => x.Nome)
                .NotNull().WithMessage("O campo nome é obrigatório.")
                .MinimumLength(2).WithMessage("O campo nome deve ter no mínimo 2 caracteres.");

            RuleFor(x => x.Sobrenome)                            
                .MinimumLength(2).WithMessage("O campo nome deve ter no mínimo 2 caracteres.");

            RuleFor(x => x.Cpf)
                .Transform(x => !string.IsNullOrEmpty(x) ? x.Replace("-", "").Replace(".", "") : null)
                .NotNull().WithMessage("O campo cpf é obrigatório.")
                .MaximumLength(11).WithMessage("O campo nome deve ter no máximo 11 caracteres.");

            RuleFor(x => x.DataNascimento)
                .NotNull().WithMessage("O campo data de nascimento é obrigatório.")
                .GreaterThan(DateTimeOffset.MinValue).WithMessage("A data deve ser válida.")
                .LessThan(DateTimeOffset.Now).WithMessage("A data deve ser válida.");

            RuleFor(x => x.EstadoCivil)
                .NotNull().WithMessage("O campo estado civil é obrigatório.")
                .NotEqual(EstadoCivilEnum.Nenhum);

            RuleFor(x => x.Endereco).SetValidator(new EnderecoValidator());
        }
    }
}
