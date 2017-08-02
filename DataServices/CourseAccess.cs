using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ReactGrades.Models;

namespace ReactGrades.DataServices
{
    public class CourseAccess
    {
        public static int nextID = 2;
        public static List<Course> courses = new List<Course>()
        {
            new Course(0, "Comp. Sci. 101", "An intro to computer science class. Focuses on basic programming and logic." , new List<GPA>(){
                GPA.A,
                GPA.A,
                GPA.A,
                GPA.B,
                GPA.D,
                GPA.F
            }),
            new Course(1, "Comp. Sci. 102", "A second level computer science class. Focuses on OOP concepts and data structures.")
        };

        public void AddCourse(Course item)
        {
            item.ID = nextID;
            courses.Add(item);

            nextID++;
        }

        public IEnumerable<Course> GetAllCourses()
        {
            return courses;
        }

        public Course GetCourseById(int id)
        {
            return courses.First(x => x.ID == id);
        }

        public void RemoveCourseById(int id)
        {

            courses = courses.Where(x => x.ID != id).ToList();
        }

        public void UpdateCourseById(int id, Course item)
        {
            courses.ForEach(course =>
            {
                if(course.ID == id)
                {
                    course = item;
                }
            });
        }
    }
}
