using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactGrades.Models
{
    public class Course
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public List<GPA> Grades { get; set; }

        public Course(int id, string name, string description, List<GPA> grades = null)
        {
            ID = id;
            Name = name;
            Description = description;
            Grades = grades ?? new List<GPA>();

        }
    }
}
