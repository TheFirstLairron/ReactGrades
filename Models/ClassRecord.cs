using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactGrades.Models
{
    public class ClassRecord
    {
        public int StudentID { get; set; }
        public string ClassName { get; set; }
        public Grade Grade { get; set; }

        public ClassRecord(int id, string name, Grade g = Grade.A)
        {
            StudentID = id;
            ClassName = name;
            Grade = g;
        }
    }
}
