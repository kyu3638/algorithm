class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        stack = []
        answer = [0] * len(temperatures)

        for i in range(len(temperatures)):
            while stack and temperatures[stack[-1]] < temperatures[i]:
                index = stack.pop()
                answer[index] = i - index
            stack.append(i)

        return answer
