import sys
import heapq

n = int(sys.stdin.readline())
cards = []
for _ in range(n):
    heapq.heappush(cards, int(sys.stdin.readline()))

sum = 0
if len(cards) == 1:  # 카드가 한 장일때는 그 카드 리터
    print(0)
else:  # 카드가 한 장 이상일 때는 누적 합계
    while len(cards) > 1:
        temp1 = heapq.heappop(cards)
        temp2 = heapq.heappop(cards)
        sum += temp1 + temp2
        heapq.heappush(cards, temp1 + temp2)
    print(sum)
