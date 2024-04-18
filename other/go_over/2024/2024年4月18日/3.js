// 链表
class ListNode{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}
const node = new ListNode(1);
const node2 = node.next = new ListNode(2);

const node3 = new ListNode(3);

node.next = node3;
node3.next = node2;
console.log(node);