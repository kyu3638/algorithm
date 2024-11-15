using System;

public class Solution {
    public int solution(int a, int b) {
        int ab = int.Parse(a.ToString() + b.ToString());
        
        return ab >= 2 * a * b ? ab : 2 * a * b;
        
        
    }
}