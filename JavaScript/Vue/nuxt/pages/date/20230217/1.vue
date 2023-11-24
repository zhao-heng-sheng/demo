<template>
    <div></div>
</template>

<script setup>
let arr = [
    { id: 1, name: "部门1", pid: 0 },
    { id: 2, name: "部门2", pid: 1 },
    { id: 3, name: "部门3", pid: 1 },
    { id: 4, name: "部门4", pid: 3 },
    { id: 5, name: "部门5", pid: 4 },
]
let getChildren = (data, result, pid) => {
    for (let item of data) {
        if(item.pid === pid){
            let newItem = {...item,children:[]}
            console.log(result)
            result.push(newItem)
            getChildren(data,newItem.children,item.id)
        }
    }
}
function arrayToTree(data,pid) {
    let result = []
    getChildren(data,result,pid)
    return result
}
console.log(arrayToTree(arr,0))
</script>

<style lang="scss" scoped></style>
