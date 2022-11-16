using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication1.Models;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using System.Web;

namespace WebApplication1.Controllers
{
    public class FeedbackController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"
                    select id,fname,lname,country,subject 
                    from
                    dbo.feed
                    ";
            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.
                ConnectionStrings["EmployeeAppDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }

            return Request.CreateResponse(HttpStatusCode.OK, table);


        }

        public string Post(feedback feed)
        {
            try
            {
                string query = @"
                    insert into dbo.feed values
                    (
                    
                    '" + feed.fname + @"'
                    ,'" + feed.lname + @"'
                    ,'" + feed.country + @"'
                    ,'" + feed.subject + @"'
                    )
                    ";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["EmployeeAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Added Successfully!!";
            }
            catch (Exception)
            {

                return "Failed to Add!!";
            }
        }


    }
}
