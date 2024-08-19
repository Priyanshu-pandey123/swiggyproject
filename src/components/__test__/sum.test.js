import { sum } from "../Sum";



test("sum function for test",()=>{
  const result= sum(2,3);
  expect(result).toBe(5);
})