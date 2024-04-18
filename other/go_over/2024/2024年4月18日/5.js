// 二叉树
class TreeNode {
	constructor(val) {
		this.val = val;
		this.left = this.right = null;
	}
}
let node = new TreeNode('A');
let node2 = node.left = new TreeNode('B');
let node3 = node.right = new TreeNode('C');
let node4 = node2.left = new TreeNode('D');
let node5 = node2.right = new TreeNode('E');
let node6 = node3.right = new TreeNode('F');
let arr = []
let forNode = (node) => {
	if (!node) return;
	arr.push(node.val)
	if (node.left) forNode(node.left)
	if (node.right) forNode(node.right)
}
forNode(node)
console.log(arr);