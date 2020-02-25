using Sage.Domain.Entities;
using System.Collections.Generic;
using System.Linq;

namespace Sage.Data.Repositories
{
    public class Repository<T> where T: class
    {
        private readonly Contexto _contexto;

        public Repository(Contexto contexto)
        {
            _contexto = contexto;
        }

        public virtual T Add(T entity)
        {
            _contexto.Add(entity);
            _contexto.SaveChanges();
            return entity;
        }

        public virtual T Update(T entity)
        {
            _contexto.Update(entity);
            _contexto.SaveChanges();
            return entity;
        }

        public virtual bool Delete(T entity) 
        {
            _contexto.Remove(entity);
            _contexto.SaveChanges();
            return true;
        }

        public virtual IEnumerable<T> List()
        {
            return _contexto.Set<T>().ToList();
        }

        public virtual T Get(int id)
        {
            return _contexto.Find<T>(id);
        }
    }
}
