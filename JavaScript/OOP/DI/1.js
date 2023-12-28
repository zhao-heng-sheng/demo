// 定义依赖容器类
class DependencyContainer {
    constructor() {
        this.userService = null // 用户服务实例
    }

    // 设置用户服务实例
    setUserService(userService) {
        this.userService = userService
    }
}

// 定义用户服务类
class UserService {
    constructor() {
        console.log("UserService created")
    }
}

// 定义个人资料组件类
class ProfileComponent {
    constructor(container) {
        container.setUserService(new UserService()) // 使用依赖容器设置用户服务实例
        console.log("ProfileComponent created")
    }
}

const container = new DependencyContainer() // 创建依赖容器实例
const profileComponent = new profileComponent(container) // 创建个人资料组件实例
