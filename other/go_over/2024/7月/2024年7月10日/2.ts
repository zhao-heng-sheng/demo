import {z} from 'zod'
import { zodToJsonSchema } from "zod-to-json-schema";
const getCurrentWeatherSchema = z.object({
  location: z.string().describe("城市或地区。例如：'北京'"),
  unit: z.enum(["celsius", "fahrenheit"]).optional().describe("温度单位。默认值：'fahrenheit'"),
});
console.log(zodToJsonSchema(getCurrentWeatherSchema))