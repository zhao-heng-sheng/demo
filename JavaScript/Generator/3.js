class Node {
    constructor(id) {
        this.id = id
        this.neighbors = new Set()
    }
    connect(node) {
        if (node !== this) {
            this.neighbors.add(node)
            node.neighbors.add(this)
        }
    }
}
class RandomGraph {
    constructor(size) {
        this.nodes = new Set()
        // 创建节点
        for (let i = 0; i < size; ++i) {
            this.nodes.add(new Node(i))
        }
        // 随机连接节点
        const threshold = 1 / size
        for (const x of this.nodes) {
            for (const y of this.nodes) {
                if (Math.random() < threshold) {
                    x.connect(y)
                }
            }
        }
    }
    // 这个方法仅用于调试
    print() {
        for (const node of this.nodes) {
            const ids = [...node.neighbors].map((n) => n.id).join(",")
            console.log(`${node.id}: ${ids}`)
        }
    }
}
const g = new RandomGraph(6)
g.print()
