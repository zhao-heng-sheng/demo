/* 
真题描述：将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有结点组成的。 
*/
/* 
示例： 输入：1->2->4, 1->3->4 输出：1->1->2->3->4->4
*/
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
let node1 = new ListNode(1);
node1.next = new ListNode(2);
node1.next.next = new ListNode(4);
node1.next.next.next = new ListNode(10);

let node2 = new ListNode(1);
node2.next = new ListNode(3);
node2.next.next = new ListNode(4);
node2.next.next.next = new ListNode(8);

let fn = (node1, node2) => {
  let res = new ListNode()
  let n1 = node1
  let n2 = node2
  let n3 = res;
  while (n1 && n2) {
    if (n1.val <= n2.val) {
      n3.next = new ListNode(n1.val)
      n3 = n3.next;
      n1 = n1.next
    } else {
      n3.next = new ListNode(n2.val)
      n3 = n3.next;
      n2 = n2.next
    }
  }
  (n1 === null ? n3.next = n2 : n3.next = n1)

  return res.next
}
let a = fn(node1, node2)
console.log(a)