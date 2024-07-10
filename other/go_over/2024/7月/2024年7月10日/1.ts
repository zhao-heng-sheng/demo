import {z} from 'zod'
const stringSchema = z.string();
// stringSchema.parse('hello Zod!')
stringSchema.parse(123)

