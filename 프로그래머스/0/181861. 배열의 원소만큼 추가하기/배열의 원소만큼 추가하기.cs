using System;
using System.Collections.Generic;

public class Solution {
    public int[] solution(int[] arr) {
        List<int> answer = new List<int>{};
        
        foreach(var num in arr)
        {
            for(var i = 0; i < num; i++)
            {
                answer.Add(num);
            }
        }
        
        return answer.ToArray();
    }
}