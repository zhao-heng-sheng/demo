// 数组转链表
export let arrTransformLink = (arr)=>{
	class ListNode{
		constructor(val){
			this.val = val
			this.next = null
		}
	}
	if(arr.length===0) return null
	let dummy = new ListNode()
	let res = dummy
	for(let i=0;i<arr.length;i++){
		res.next = new ListNode(arr[i])
		res = res.next
	}
	return dummy.next
}