import { render,screen } from "@testing-library/react";
import Body from "../Body";
import { json } from "react-router-dom";


  global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(data)
        }
    })
  });

it("Should the render the Body Component",()=>{
    render(<Body/>)
a
})