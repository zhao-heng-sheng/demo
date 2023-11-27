import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import { Department } from './entity/Department';
import { Employee } from './entity/Employee';

AppDataSource.initialize().then(async () => {
    // const d1 = new Department()
    // d1.name = '技术部'
    // const e1 = new Employee()
    // e1.name = '张三'
    // e1.department = d1;
    // const e2 = new Employee()
    // e2.name = '李四'
    // e2.department = d1;
    // const e3 = new Employee()
    // e3.name = '赵高'
    // e3.department = d1;

    // await AppDataSource.manager.save(Department,d1)
    // await AppDataSource.manager.save(Employee,[e1,e2,e3])



    // const e1 = new Employee()
    // e1.name = '张三'
    // const e2 = new Employee()
    // e2.name = '李四'
    // const e3 = new Employee()
    // e3.name = '赵高'
    // const d1 = new Department()
    // d1.name = '产品部'
    // d1.employees = [e1,e2,e3]
    // await AppDataSource.manager.save(Department,d1)


    // const deps = await AppDataSource.manager.find(Department,{relations:['employees']})
    // console.log(deps);
    // console.log(deps.map(item=>item.employees))

    const es = await AppDataSource.manager.getRepository(Department).createQueryBuilder('d').leftJoinAndSelect('d.employees','e').getMany()
    console.log(es);
    console.log(es.map(item=>item.employees))

}).catch(error => console.log(error))
