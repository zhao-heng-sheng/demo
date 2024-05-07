import {arrTransformLink} from '../../utils.js'
/* 
 真题描述：定义一个函数，输入一个链表的头结点，反转该链表并输出反转后链表的头结点。
 */
/* 
 示例:
 输入: 1->2->3->4->5->NULL
 输出: 5->4->3->2->1->NULL
 */
class ListNode{
	constructor(val){
		this.val = val
		this.next = null
	}
}
let node1 = new ListNode(1)
node1.next = new ListNode(2)
node1.next.next = new ListNode(3)
node1.next.next.next = new ListNode(4)
node1.next.next.next.next = new ListNode(5)
// let node2 = arrTransformLink([1,2,3,4,5])

let fn = (node)=>{
	
}