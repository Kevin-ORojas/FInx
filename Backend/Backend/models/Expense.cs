namespace Backend.Models;

public class Expense
{
    public int Id { get; set; }
    public required string Description { get; set; } = string.Empty;
    public required decimal Amount { get; set; }
    public required string Category { get; set; } = string.Empty;
    public string PaymentMethod { get; set; } = string.Empty;
    public  DateTime Date { get; set; } = DateTime.UtcNow;

    public User user { get; set; }
}