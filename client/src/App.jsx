import { Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage/Homepage'
import PageNotFound from './Pages/PageNotFound/PageNotFound'
import Loginpage from './Pages/Loginpage/Loginpage'
import Registerpage from './Pages/Registerpage/Registerpage'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import Cartpage from './Pages/Cartpage/Cartpage'

const App = () => {
  return (
    //grouping all the routes
<Routes>
    {/* Single route */}
    <Route path='/' element={<Homepage/>} />
    <Route path='/login' element={<Loginpage/>}/>
    <Route path='/register' element={<Registerpage/>}/>
     <Route path='/product/:id' element={<ProductDetails/>} />
    {/* page not found route should always add in last. * is used to show there is an errror */}
    <Route path='/cart' element={<Cartpage/>} />
    <Route path='*' element={<PageNotFound/>} />
</Routes>
  )
}

export default App
