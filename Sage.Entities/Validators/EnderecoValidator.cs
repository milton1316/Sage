using FluentValidation;
using Sage.Domain.Entities;
using Sage.Domain.Entities.Enums;

namespace Sage.Domain.Validators
{
    public class EnderecoValidator : AbstractValidator<Endereco>
    {
        public EnderecoValidator()
        {
            RuleFor(x => x.Logradouro)
                .NotNull().WithMessage("O campo logradouro é obrigatório.")
                .MinimumLength(2).WithMessage("O campo logradouro deve ter no mínimo 2 caracteres.");

            RuleFor(x => x.Cep)
                .Transform(x => !string.IsNullOrEmpty(x) ? x.Replace("-", "").Replace(".", "") : null)
                .NotNull().WithMessage("O campo cep é obrigatório.")
                .MaximumLength(11).WithMessage("O campo cep deve ter no máximo 8 caracteres.");

            RuleFor(x => x.Bairro)
                .NotNull().WithMessage("O campo bairro é obrigatório.")
                .MinimumLength(2).WithMessage("O campo bairro deve ter no mínimo 2 caracteres.");

            RuleFor(x => x.Cidade)
                .NotNull().WithMessage("O campo cidade é obrigatório.")
                .MinimumLength(2).WithMessage("O campo cidade deve ter no mínimo 2 caracteres.");

            RuleFor(x => x.Estado)
                .NotNull().WithMessage("O campo estado é obrigatório.")
                .NotEqual(EstadoEnum.Nenhum);
        }
    }
}
