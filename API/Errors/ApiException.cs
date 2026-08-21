using System;

namespace API.Errors;

public class ApiException(int statusCode,string message, string? Detials)
{
    public int statusCode { get; set; } = statusCode;
    public string Message { get; set; } = message;
    public string? Detials { get; set; } = Detials;
}
