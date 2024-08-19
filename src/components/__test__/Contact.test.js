import { render,screen } from "@testing-library/react"
import Contact from "../Contact"



test('let us check the contact file will render or not',()=>{

    render(<Contact/>)
    const heading=screen.getByRole('heading');
    expect(heading).toBeInTheDocument();

})


test('let us check the contact file have the submit button or not',()=>{
    render(<Contact/>)
    const input=screen.getByRole('button');
     expect.toBeInTheDocument();
    
})


