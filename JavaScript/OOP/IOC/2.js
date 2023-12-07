class Ioc {
    constructor() {
        this.services = {}
    }

    register(service) {
        this.services[service.name] = service
    }

    resolve(serviceName) {
        return this.services[serviceName]
    }
}
class Service {
    constructor(name) {
        this.name = name
    }
}
const ioc = new Ioc()

ioc.register(new Service("UserService"))
ioc.register(new Service("DatabaseService"))
const userService = ioc.resolve("UserService")
const databaseService = ioc.resolve("DatabaseService")
