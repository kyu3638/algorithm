using System;

public class Example
{
    public static void Main()
    {
        String s;

        Console.Clear();
        s = Console.ReadLine();

        foreach(var item in s)
        {
            Console.WriteLine(item);
        }
    }
}