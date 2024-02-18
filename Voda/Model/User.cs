namespace Voda.Model
{
    
    public class User
    {
        private int idCount;
        private string email;
        private string date;
        private int goal;
        private bool notifications;
        private string country;
        private int vwaterSaved5;
        private int balance;

        public User(int idCount, string? username, string? password, string email, string date, int goal, bool notifications, string country, int waterSaved, int balance)
        {
            Id = idCount;
            Username = username;
            Password = password;
            Email = email;
            DateOfBirth = date;
            SavingGoal = goal;
            Notifications = notifications;
            Country = country;
            WaterSavedToday = waterSaved;
            PointsBalance = balance;
        }


        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string DateOfBirth { get; set; }
        public int SavingGoal { get; set; }
        public bool Notifications { get; set; }
        public string Country{ get; set; }
        public int WaterSavedToday { get; set; }
        public int PointsBalance{ get; set; }
    }
}
