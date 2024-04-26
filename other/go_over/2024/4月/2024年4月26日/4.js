/* 
真题描述：给定一个排序链表，删除所有含有重复数字的结点，只保留原始链表中 没有重复出现的数字。
*/
/* 
示例 1:
输入: 1->2->3->3->4->4->5
输出: 1->2->5
示例 2:
输入: 1->1->1->2->3
输出: 2->3
*/
class ListNode{
  constructor(val){
    this.val = val
    this.next = null
  }
}
let node = new ListNode(1);
node.next = new ListNode(1);
node.next.next = new ListNode(1);
node.next.next.next = new ListNode(2);
node.next.next.next.next = new ListNode(3);
node.next.next.next.next.next = new ListNode(3);

let fn = (node)=>{
	let head = node;
	while(head&&head.next){
		if(head.val===head.next.val){
			head = head.next.next
		}else{
			head = head.next
		}
	}
  console.log(head);
	return node
}
console.log(fn(node))