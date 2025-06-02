namespace Backend.Models;

public class RecurringPayments
{
    public int Id { get; set; }
    public required int UserId { get; set; }
    public decimal Amount { get; set; }
    public string Description { get; set; } = string.Empty;
    public DateTime NextPaymentDate { get; set; } = DateTime.UtcNow;
    public required User User { get; set; }
}