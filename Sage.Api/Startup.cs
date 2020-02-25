using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Newtonsoft.Json;
using Sage.Data;
using Sage.Data.Repositories;
using Sage.Domain.Entities;
using Sage.Domain.Validators;

namespace Sage.Api
{
    public class Startup
    {
        private readonly string AllowSpecificOrigins = "_allowSpecificOrigins";

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            services.AddCors(options =>
            {
                options.AddPolicy(AllowSpecificOrigins,
                builder =>
                {
                    builder.WithOrigins("*").WithHeaders("*").WithMethods("*");
                });
            });
            services.AddMvc().AddNewtonsoftJson(options =>
            {
                options.SerializerSettings.NullValueHandling = NullValueHandling.Ignore;                
                options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
            });

            services.AddDbContext<Contexto>(options => options.UseLazyLoadingProxies().UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
            services.AddScoped<Repository<Cliente>>();
            services.AddScoped<Repository<Endereco>>();
            services.AddScoped<ClienteValidator>();
            services.AddScoped<EnderecoValidator>();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, Contexto contexto)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors(AllowSpecificOrigins);
            
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            DbInicializador.Inicializar(contexto);
        }
    }
}
