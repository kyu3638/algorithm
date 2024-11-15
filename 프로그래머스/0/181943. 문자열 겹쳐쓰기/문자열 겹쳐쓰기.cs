using System;

public class Solution {
    public string solution(string my_string, string overwrite_string, int s) {
        string answer = "";
        
        int over = overwrite_string.Length;
        for(var i = 0; i < my_string.Length; i++)
        {
            if(i < s)
            {
                answer += my_string[i];
            }
            else if (i >= s + over)
            {
                answer += my_string[i];
            }
            else
            {
                answer += overwrite_string[i-s];
            }
        }
        
        return answer;
    }
}