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
	n = 3
let fn = (arr1, arr2, m, n) => {
	// arr1有效值最后一位
	let count = 0
	let i = m-1
	// arr2最后一位
	let j = n-1
	// arr1最后一位
	let k = m+n-1
	while((i>=0||j>=0)&&count<100){
		
		if(arr1[i]>arr2[j]){
			arr1[k] = arr1[i]
			i--
		}
		if(arr2[j]>arr1[i]||i<0){
			arr1[k] = arr2[j]
			j--
		}
		
		k--
	}
}
console.log(fn(nums1, nums2, m, n))