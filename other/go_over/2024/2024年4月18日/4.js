// 二叉树
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}
let node = new TreeNode(1);
let node2 = node.left = new TreeNode(2);
console.log(node);