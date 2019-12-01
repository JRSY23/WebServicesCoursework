using LibraryApi.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseWork.DataProviders
{
    public class LibraryDataProvider
    {
        private readonly LibraryContext _context;

        public LibraryDataProvider(LibraryContext context)
        {
            _context = context;
        }
    }
}
