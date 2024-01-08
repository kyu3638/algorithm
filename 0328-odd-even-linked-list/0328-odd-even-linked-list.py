# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def oddEvenList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        newList = ListNode()
        evenList = ListNode()
        answer=newList
        headOfEven = evenList

        current = head

        count = 1

        while current:
            if count % 2 == 1:
                newList.next = current
                newList = newList.next
            else:
                evenList.next = current
                evenList = evenList.next
            current = current.next
            count += 1
        
        newList.next = headOfEven.next
        evenList.next = None

        return answer.next