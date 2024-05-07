/* 
真题描述：给定一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。 
 */
/* 
 示例： 给定一个链表: 1->2->3->4->5, 和 n = 2.
 当删除了倒数第二个结点后，链表变为 1->2->3->5.
 说明： 给定的 n 保证是有效的。
 */
class ListNode {
	constructor(val) {
		this.val = val
		this.next = null
	}
}


let node1 = new ListNode(1);
node1.next = new ListNode(2);
node1.next.next = new ListNode(3);
node1.next.next.next = new ListNode(4);
node1.next.next.next.next = new ListNode(5);
let n = 2

let fn = (node, n) => {
	let dummy = new ListNode()
	dummy.next = node
	let first = dummy
	let last = dummy
	for (let i = 0; i < n; i++) {
		last = last.next
	}
	while(last.next!==null){
		first = first.next
		last = last.next;
	}
	first.next = first.next.next
	return dummy.next
}
fn(node1,n)