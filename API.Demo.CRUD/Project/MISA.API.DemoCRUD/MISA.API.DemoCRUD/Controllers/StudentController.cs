using MISA.API.DemoCRUD.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MISA.API.DemoCRUD.Controllers
{
    public class StudentController : ApiController
    {
        // GET: api/Student

        SCHOOLEntities db = new SCHOOLEntities();
        [Route("select")]
        [HttpGet]
        public IEnumerable<student> Get()
        {
            return db.students.ToList();
        }

        // GET: api/Student/5
        public student Get(string id)
        {
            return db.students.Find(id);
        }

        // POST: api/Student
        [Route("create")]
        [HttpPost]
        public string Post([FromBody]student a)
        {
           //student sd = new student();
           // sd.id = a.id;
           // sd.name = a.name;
           // sd.birthday = a.birthday;
           db.students.Add(a);
           db.SaveChanges();
           return "Thêm thành công";
        }

        // PUT: api/Student/5
        [Route("update")]
        [HttpPut]
        public string Put(string id, student a)
        {
            var sd = db.students.Find(id);
            sd.name = a.name;
            sd.birthday = a.birthday;

            db.Entry(sd).State = System.Data.Entity.EntityState.Modified;
            db.SaveChanges();
            return "Cập nhật thành công";
        }

        // DELETE: api/Student/5
        [Route("delete")]
        [HttpDelete]
        public string Delete(string id)
        {
            student sd = db.students.Find(id);
            db.students.Remove(sd);
            db.SaveChanges();
            return "Xóa thành công !";
        }
    }
}
