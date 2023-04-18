import sys
import heapq

# 백준이가 정수를 하나 말할 때 마다 동생은 그 값 중 중간값 프린트해야함
# 백준이가 말한 개수가 짝수라면 가운데 두 수 중 작은 값!

# 백준이가 외치는 정수의 개수
N = int(sys.stdin.readline())

# 백준이가 외친 말들
num_list = []
for _ in range(N):
    num_list.append(int(sys.stdin.readline()))

# 숫자 나오는 순간마다 중간값을 찾는 코드 작성
leftHeap = []  # 중간 값보다 작은 값들의 리스트, 내림차순 정리, 루트값이 중간값이 될 것!
rightHeap = []  # 중간 값보다 큰 값들의 리스트, 오름차순 정리,
for i in num_list:
    if len(leftHeap) == len(rightHeap):
        heapq.heappush(leftHeap, (-i, i))  # left : 최대 힙
    else:
        heapq.heappush(rightHeap, (i, i))  # right : 최소 힙

    if (
        rightHeap and leftHeap[0][1] > rightHeap[0][1]
    ):  # rightHeap 에 원소가 없을 때는 돌아가지 않음,,
        l_max = heapq.heappop(leftHeap)[1]
        r_min = heapq.heappop(rightHeap)[1]
        heapq.heappush(leftHeap, (-r_min, r_min))
        heapq.heappush(rightHeap, (l_max, l_max))

    print(leftHeap[0][1])
