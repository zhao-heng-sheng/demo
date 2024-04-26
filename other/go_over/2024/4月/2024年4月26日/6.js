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
let fn = (n1, n2) => {
    let res = new ListNode();
    let i = n1;
    let j = n2;
    let k = res;
    let count = 0;
    while (i && j && count < 100) {
        count++;
        if (i.val >= j.val) {
            k.next = new ListNode(j.val);
            k = k.next;
            j = j.next;
        } else {
            k.next = new ListNode(i.val);
            k = k.next;
            i = i.next;
        }
    }
    i === null ? (k.next = j) : (k.next = i);
    return res.next;
};
console.log(fn(node1, node2));
console.log(node1)
console.log(node2)