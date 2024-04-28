/* 
真题描述：给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
*/
/* 
示例 1:
输入: 1->1->2
输出: 1->2
示例 2:
输入: 1->1->2->3->3
输出: 1->2->3
*/
class ListNode {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}
let node = new ListNode(1);
node.next = new ListNode(1);
node.next.next = new ListNode(1);
node.next.next.next = new ListNode(2);
node.next.next.next.next = new ListNode(3);
node.next.next.next.next.next = new ListNode(3);

let count = 0

let fn = (node) => {
	let res = new ListNode()
	res.next = node;
	let i = res
	let j = res.next
	while (j&&count<100) {
		count++
		if (i.val === j.val) {
			i.next = i.next.next
			j = i.next
		} else {
			i = i.next;
			j = i.next;
		}
	}
	return node;
}
fn(node)
console.log(node)