using System;
using System.Collections.Generic;

public class Solution {
    public int solution(int a, int b, int c) {
        int score = 0;
        int sameCount = CountSameNumbers(a, b, c);
        
        // 첫 번째 항: a + b + c
        int sum = a + b + c;
        
        // 두 번째 항: a² + b² + c²
        int sumSquares = a*a + b*b + c*c;
        
        // 세 번째 항: a³ + b³ + c³
        int sumCubes = a*a*a + b*b*b + c*c*c;
        
        if(sameCount == 0) {
            // 세 숫자가 모두 다를 때
            score = sum;
        } else if(sameCount == 2) {
            // 두 숫자만 같을 때
            score = sum * sumSquares;
        } else if(sameCount == 3) {
            // 세 숫자가 모두 같을 때
            score = sum * sumSquares * sumCubes;
        }
        
        return score;
    }
    
    public static int CountSameNumbers(int a, int b, int c) {
        if(a == b && b == c) {
            return 3; // 세 숫자가 모두 같음
        } else if(a == b || b == c || c == a) {
            return 2; // 두 숫자만 같음
        } else {
            return 0; // 세 숫자가 모두 다름
        }
    }
}