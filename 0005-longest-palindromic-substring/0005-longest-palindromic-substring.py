class Solution:
    def longestPalindrome(self, s: str) -> str:
        answer = ''
    
        for i in range(len(s)):
            palindrome, left, right = '', i, i
            
            # 같은 문자가 연속으로 나오는지 확인하고 거기에 맞춰 초기화
            num_of_same_letter = 1
            for k in range(i+1, len(s)):
                if s[k] == s[i]:
                    num_of_same_letter += 1
                else:
                    break
            
            if num_of_same_letter % 2 == 1:  # 같은 문자가 홀수 개 연속일 때 초기화
                i = i + num_of_same_letter // 2
                palindrome = s[i]
                left, right = i, i
            elif num_of_same_letter % 2 == 0:  # 같은 문자가 짝수 개 연속일 때 초기화
                i = i + num_of_same_letter // 2 - 1
                palindrome = s[i:i+2]
                left, right = i, i+1
            
            # palindrome으로부터 j만큼 떨어진 문자를 확인하고, 두 문자가 같으면 palindrome에 추가
            for j in range(1, len(s) // 2 + 1):
                if left - j >= 0 and right + j < len(s):
                    if s[left - j] == s[right + j]:
                        palindrome = s[left - j] + palindrome + s[right + j]
                    else:
                        break
            
            # 기준을 각 문자로 잡았을 때의 palindrome의 길이를 비교하고 answer 갱신
            if len(palindrome) > len(answer):
                answer = palindrome
        
        return answer