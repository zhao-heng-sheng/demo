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

let fn = (node1, node2) => {
    let res = null;

    let callback = (node1, node2, res) => {
      console.log(node1, node2, res,'ccc');
        if (!node1&&!node2){
          return res
        }
        if (!node1) {
          if(!res) res = new ListNode(node2.val);
          res.next = node2.next
          return res
        }
        if (!node2) {
          if(!res) res = new ListNode(node1.val);
          res.next = node1.next
          return res
        }

        if (node1.val >= node2.val) {
            if (!res) res = new ListNode(node2.val);
            res.next = callback(node1, node2.next,res.next);
        } else {
            if (!res) res = new ListNode(node1.val);
            res.next = callback(node2, node1.next,res.next);
        }
        return res
    };


    res = callback(node1, node2, res);
    console.log(res);
    return res;
};
console.log(fn(node1, node2))