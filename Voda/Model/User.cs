namespace Voda.Model
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public DateOnly DateOfBirth { get; set; }
        public int SavingGoal { get; set; }
        public bool Notifications { get; set; }
        public string Country{ get; set; }
        public int WaterSavedToday { get; set; }
        public int PointsBalance{ get; set; }
    }
}
