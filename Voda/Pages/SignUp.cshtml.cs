using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Voda.Model;

namespace Voda.Pages
{
    public class Sign_upModel : PageModel
    {
        int IdCount = 0;

        

        public void OnGet()
        {
        }
        //public void OnPost(AccountContext accountContext)
        //{
        //    IdCount += 1;
        //    string username = Request.Form["username"];
        //    string password = Request.Form["password"];
        //    User user = new(IdCount, username, password, "", "", 0, true, "", 0, 0);
        //    accountContext.tblUsers.Add(user);
        //}
    }
}
