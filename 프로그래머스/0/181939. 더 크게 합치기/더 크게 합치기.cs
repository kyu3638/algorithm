using System;

public class Solution {
    public int solution(int a, int b) {
        string aString = a.ToString();
        string bString = b.ToString();
        
        int ab = int.Parse(aString + bString);
        int ba = int.Parse(bString + aString);
        
        return ab >= ba ? ab : ba;
    }
}