using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ReactGrades.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ReactGrades.Controllers
{
    [Route("api/[controller]")]
    public class Grades : Controller
    {
        public List<ClassRecord> list = new List<ClassRecord>()
        {
            new ClassRecord(0, "zero", Grade.A),
            new ClassRecord(1, "one", Grade.B),
            new ClassRecord(2, "two", Grade.C),
            new ClassRecord(3, "three", Grade.D),
            new ClassRecord(4, "four", Grade.F),
            new ClassRecord(5, "five", Grade.A)
        };

        // GET: api/values
        [HttpGet]
        public IEnumerable<ClassRecord> Get()
        {
            return list;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ClassRecord Get(int id)
        {
            return list.First(x => x.StudentID == id);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]ClassRecord value)
        {
            list.Add(value);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]ClassRecord value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
