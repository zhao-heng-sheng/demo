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
class ListNode{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}
let node = new ListNode(1);
node.next = new ListNode(1);
node.next.next = new ListNode(1);
node.next.next.next = new ListNode(2);

let fn =(node)=>{
	let current = node;
	let next = node.next
	while(next){
    console.log(current.val,next.val);
		if(current.val===next.val){
      current = next
    }
    // console.log(current);
		// current = current.next;
		if(current) next = current.next
    console.log(current,next);
	}
  console.log(current)
	return node
}
console.log(fn(node))