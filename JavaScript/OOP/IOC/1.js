// 定义一个容器类
class Container {
    constructor() {
        this.services = {} // 用于存储服务的对象
    }

    // 注册一个服务
    register(service) {
        this.services[service.name] = service
    }

    // 获取一个服务
    getService(name) {
        return this.services[name]
    }
}

// 定义一个服务类
class Service {
    constructor(name) {
        this.name = name
    }
}

const container = new Container() // 创建一个容器实例

// 注册两个服务到容器中
container.register(new Service("First Service"))
container.register(new Service("Second Service"))

// 从容器中获取两个服务实例
const firstService = container.getService("First Service")
const secondService = container.getService("Second Service")

console.log(firstService.name) // 输出 "First Service"
console.log(secondService.name) // 输出 "Second Service"
