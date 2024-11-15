using System;

public class Solution {
    public string solution(string[] arr) {
        string answer = "";
        
        foreach(var item in arr)
        {
            answer+=item;
        }
        
        return answer;
    }
}