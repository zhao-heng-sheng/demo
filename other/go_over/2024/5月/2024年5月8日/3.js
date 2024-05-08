/*
真题描述：反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
*/
/*
说明: 1 ≤ m ≤ n ≤ 链表长度。
*/
/*
示例:
输入: 1->2->3->4->5->NULL, m = 2, n = 4
输出: 1->4->3->2->5->NULL
*/
class ListNode {
	constructor(val) {
		this.val = val
		this.next = null
	}
}
let node1 = new ListNode(1)
node1.next = new ListNode(2)
node1.next.next = new ListNode(3)
node1.next.next.next = new ListNode(4)
node1.next.next.next.next = new ListNode(5)

let fn = (node,m,n)=>{
  let dummy = new ListNode()
}