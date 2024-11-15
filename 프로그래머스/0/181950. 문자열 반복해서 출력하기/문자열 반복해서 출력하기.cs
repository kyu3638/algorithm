using System;

public class Example
{
    public static void Main()
    {
        String[] input;

        Console.Clear();
        input = Console.ReadLine().Split(' ');

        String s1 = input[0];
        int a = Int32.Parse(input[1]);
        
        var x = "";
        for(var i = 0; i < a; i++)
        {
            x += s1;
        }

        Console.Write(x);
    }
}