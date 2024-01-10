class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        if not digits:
            return []

        digit_to_chars = {
            '2': ['a', 'b', 'c'],
            '3': ['d', 'e', 'f'],
            '4': ['g', 'h', 'i'],
            '5': ['j', 'k', 'l'],
            '6': ['m', 'n', 'o'],
            '7': ['p', 'q', 'r', 's'],
            '8': ['t', 'u', 'v'],
            '9': ['w', 'x', 'y', 'z']
        }

        def backtrack(index, path):
            if len(path) == len(digits):
                combinations.append(''.join(path))
                return

            for char in digit_to_chars[digits[index]]:
                backtrack(index + 1, path + [char])

        combinations = []
        backtrack(0, [])
        return combinations