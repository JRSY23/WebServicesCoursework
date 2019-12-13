using Horizon.XmlRpc.Core;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace LibraryApi.Models
{
    [Table("Book")]
    public partial class Book
    {
        [Key]
        [XmlRpcMissingMapping(MappingAction.Ignore)]
        public int BookID { get; set; }
        public string Name { get; set; }
        public string Author { get; set; }
        public DateTime IssueDate { get; set; }
        public int Cost { get; set; }
        
    }
}
