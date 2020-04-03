using System;
using System.Collections.Generic;
using System.Text;

namespace Sage.Domain.Interfaces
{
    public interface IRepository<T>
    {
        T Add(T entity);
        T Update(T entity);
        bool Delete(T entity);
        IEnumerable<T> List();
        T Get(int id);
    }
}
