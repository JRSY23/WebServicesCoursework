using Horizon.XmlRpc.Core;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace LibraryApi.Models
{
    [Table("PenaltiesAccounting")]
    public partial class PenaltiesAccounting
    {
        [Key]
        [XmlRpcMissingMapping(MappingAction.Ignore)]
        public int PenaltiesAccountingID { get; set; }
        public int PenaltyID { get; set; }
        public int Sum { get; set; }
        public DateTime Date { get; set; }
        public int AccountID { get; set; }
    }
}
