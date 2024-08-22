const { render,screen } = require("@testing-library/react")
import ResCard from '../ResCard';
import MOCK_DATA from '../../mockData/resData.json'



it("should be render the Rescard component with the porps data",()=>{
   
    render(<ResCard resData={MOCK_DATA}/>)
    const name=screen.getByText("Domino's Pizza");
    expect(name).toBeInTheDocument();
    
})