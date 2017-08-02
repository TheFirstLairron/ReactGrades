using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ReactGrades.DataServices;
using ReactGrades.Models;

namespace ReactGrades.Controllers
{
    [Route("api/[controller]")]
    public class CoursesController : Controller
    {
        private CourseAccess Courses { get; set; }

        public CoursesController(CourseAccess courses)
        {
            Courses = courses;
        }

        [HttpGet]
        public IEnumerable<Course> GetCourses()
        {
            return Courses.GetAllCourses();
        }

        [HttpGet("{id}")]
        public Course GetCourse(int id)
        {
            return Courses.GetCourseById(id);
        }

        [HttpPost]
        public void AddCourse([FromBody]Course value)
        {
            Courses.AddCourse(value);
        }

        [HttpPut("{id}")]
        public void UpdateCourse(int id, [FromBody]Course value)
        {
            Courses.UpdateCourseById(id, value);
        }

        [HttpDelete("{id}")]
        public void DeleteCourse(int id)
        {
            Courses.RemoveCourseById(id);
        }
    }
}
