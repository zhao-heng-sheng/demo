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

let node2 = new ListNode(1);
node2.next = new ListNode(3);
node2.next.next = new ListNode(4);

let fn = (n1, n2) => {
  let res = new ListNode()
  let x = res;
  while (n1 && n2) {
    if (n1.val > n2.val) {
      x.next = new ListNode(n2.val)
      n2 = n2.next
      x = x.next
    } else {
      x.next = new ListNode(n1.val)
      n1 = n1.next
      x = x.next
    }
  }
  console.log(n1, 'n1');
  console.log(n2, 'n2');
  console.log(res, 'res');
  (n1 === null ? x.next = n2 : x.next = n1)
  return res.next
}
let n = fn(node1, node2)
console.log('n: ', n);
