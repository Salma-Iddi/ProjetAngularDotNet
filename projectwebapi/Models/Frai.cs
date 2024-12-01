using System.ComponentModel.DataAnnotations;

namespace projectwebapi.Models
{
    public class Frai
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [DataType(DataType.DateTime)] // Specify data type for datetime
        public DateTime DateTime { get; set; }

        [Required]
        public string Categorie { get; set; }

        [Required]
        public int Montant { get; set; }
    }
}