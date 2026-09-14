import { BrowserRouter,Routes,Route } from "react-router";
import Home from "./pages/Home";
import Search from "./pages/Faq";
import LoginPage from "./pages/LoginPage";
import { Toaster } from "react-hot-toast";
import Recomend from "./pages/Recomend";
import ThanksPage from "./components/Checkout/ThanksPage";

import { Provider } from 'react-redux'
import store, { persistor } from './store'
import UserPage from "./pages/UserPage";
import Categories from "./pages/Categories";
import Register from "./pages/Register";
import CategoryPage from "./components/Categories/CategoryPage";
import CheckOut from "./pages/CheckOut";
import ProtectedRoute from "./components/common/ProtectedRoute";

import ProductPage from "./pages/ProductPage";
import CommingSoonPage from "./pages/CommingSoonPage";
import ScrolltoTop from "./components/common/ScrollToTop"


import UserPageDashboardCol from "./components/UserPage/UserPageDashboardCol";
import UserPageDashboardHistory from "./components/UserPage/UserPageDahboardHistory";
import UserPageDashboardFavaourites from "./components/UserPage/UserPageDashboardFavaourites";


import { PersistGate } from "redux-persist/integration/react";


function App() {
 
    

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Toaster/>
        <BrowserRouter>
          <ScrolltoTop/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="faq" element={<Search/>}/>
              <Route path="login" element={<LoginPage/>}/>
              <Route path="recomend" element={<Recomend/>}/>
              {/* <Route path="user" element={<UserPage/>}/> */}
              <Route path="categories" element={<Categories/>}/>
              <Route path="register" element={<Register/>}/>

              <Route
                  path="/users/:name"
                  element={
                    <ProtectedRoute>
                      <UserPage />
                    </ProtectedRoute>
                  }
                >
                  <Route index element={<UserPageDashboardCol />} />

                  <Route
                    path="history"
                    element={<UserPageDashboardHistory />}
                  />

                  <Route
                    path="favaourites"
                    element={<UserPageDashboardFavaourites />}
                  />
                  </Route>
                  
              
             
              <Route path="/categories/:name"  element={<CategoryPage/>}/>
              <Route path="checkout" element={<CheckOut/>} />
              <Route path="/checkout/thanks" element={<ThanksPage/>}/>
              {/* History */}
    
              {/* ProductPaage */}
              <Route path="/products/:productName" element={<ProductPage/>}/>

              {/* CommingSoon */}
              <Route path="comming-soon" element={<CommingSoonPage/>}/>
       


          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
     
  )
}

export default App;
