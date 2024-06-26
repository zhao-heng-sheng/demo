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


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function (l1, l2) {
    // 定义头结点，确保链表可以被访问到
    let head = new ListNode();
    // cur 这里就是咱们那根“针”
    let cur = head;
    // “针”开始在 l1 和 l2 间穿梭了
    while (l1 && l2) {
        // 如果 l1 的结点值较小
        if (l1.val <= l2.val) {
            // 先串起 l1 的结点
            cur.next = l1;
            // l1 指针向前一步
            l1 = l1.next;
        } else {
            // l2 较小时，串起 l2 结点
            cur.next = l2;
            // l2 向前一步
            l2 = l2.next;
        }

        // “针”在串起一个结点后，也会往前一步
        cur = cur.next;
    }

    // 处理链表不等长的情况
    cur.next = l1 !== null ? l1 : l2;
    // 返回起始结点
    return head.next;
};

mergeTwoLists(node1,node2)
console.log(node1,node2)