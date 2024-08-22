import { fireEvent, render,screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import Header from '../Header'
import appStore from '../../utils/appStore'

// it("should be render the header component or not",()=>{
   
//     render(
//        <BrowserRouter>
//         <Provider store={appStore}>
//                <Header/>
//         </Provider>
//         </BrowserRouter>
//     )

//       const btn=screen.getByText('Food Order App');
//       expect(btn).toBeInTheDocument();
   
// });


it("Should be the Cart component will render will or  not",()=>{
    render(
        <BrowserRouter>
          <Provider store={appStore}>
          <Header/>
        </Provider>     
        </BrowserRouter>
)

    const cart=screen.getByText('Cart-0');
    expect(cart).toBeInTheDocument();

})

it('Should my login button will be clicked or not',()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
       <Header/>
      </Provider>     
     </BrowserRouter>
    )

    const login = screen.getByRole('button', { name: /Login/ });
    expect(login).toBeInTheDocument();
    fireEvent.click(login);
    const logout=screen.getByRole('button',{name:/Logout/});
    expect(logout).toBeInTheDocument();
  
})