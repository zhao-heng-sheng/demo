// 真题描述：给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
//说明: 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。

/* 
示例: 输入:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3
输出: [1,2,2,3,5,6] 
 */

let nums1 = [1, 2, 3, 0, 0, 0],
	m = 3,
	nums2 = [2, 5, 6],
	n = 3;
let fn = (nums1, n1, nums2, n2) => {
	let i = n1 - 1
	let j = n2 - 1
	let k = n1 + n2 - 1
	let count = 0
	while ((i >= 0 || j >= 0) && count < 100) {
		count++
		if (i < 0) {
			nums1[k] = nums2[j]
			j--
			k--
		} else if (nums1[i] > nums2[j]) {
			nums1[k] = nums1[i]
			i--
			k--
		} else if (nums2[j] > nums1[i]) {
			nums1[k] = nums2[j]
			j--
			k--
		}

	}
}