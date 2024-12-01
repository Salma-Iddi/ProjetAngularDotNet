using System.ComponentModel.DataAnnotations;

namespace projectwebapi.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string FullName { get; set; }

        [Required]
        public string PasswordHash { get; set; }
    }
}