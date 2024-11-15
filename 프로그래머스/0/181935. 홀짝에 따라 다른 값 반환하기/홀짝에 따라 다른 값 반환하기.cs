using System;

public class Solution {
    public int solution(int n) {
        bool isOdd = n % 2 == 1;
        int answer = 0;
        
        if(isOdd)
        {
            for(var i = 1; i <= n; i +=2)
            {
                answer += i;        
            }
        }
        else 
        {
            for(var i = 2; i <= n; i+=2)
            {
                answer += i*i;
            }
        }
        
        return answer;
    }
}