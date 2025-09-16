function generateParenthesis(n: number): string[] {
    const answer = [];

    const recursive = (current, openCount, closeCount) => {
        // 종료조건
        if (current.length === 2 * n) {
            answer.push(current)
        }

        // n > openCount라면 괄호 열림, 닫힘 2개의 재귀 실행
        if (n > openCount) {
            recursive(current + "(", openCount + 1, closeCount);
        }

        if(openCount > closeCount) {
            recursive(current + ")", openCount, closeCount + 1);
        }
    }

    recursive("", 0, 0);

    return answer;
};