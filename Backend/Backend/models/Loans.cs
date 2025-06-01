namespace Backend.Models;

public class Loans
{
    public int Id { get; set; }
    public required int UserId { get; set; }
    public decimal Amount { get; set; }
    public string Leader { get; set; } = string.Empty;
    public DateTime LoanDate { get; set; } = DateTime.UtcNow;
    public DateTime DueDate { get; set; } = DateTime.UtcNow.AddDays(30);
    public bool isPaid { get; set; } = false;

    public User User { get; set; }

}