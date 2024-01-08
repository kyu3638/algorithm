/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    let newList = new ListNode();
    let evenList = new ListNode();
    let answer = newList;
    let evenHead = evenList;
    let current = head;

    let count = 1;
    while(current){
        if(count%2 === 1){
            newList.next = current;
            newList = newList.next;
        } else {
            evenList.next = current;
            evenList = evenList.next;
        }
        current = current.next;
        count++
    }

    newList.next = evenHead.next;
    evenList.next = null;


    return answer.next;
};