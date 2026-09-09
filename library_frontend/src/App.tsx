import { BrowserRouter,Routes,Route } from "react-router";
import Home from "./pages/Home";
import Search from "./pages/Faq";
import LoginPage from "./pages/LoginPage";
import { Toaster } from "react-hot-toast";
import Recomend from "./pages/Recomend";

import { Provider } from 'react-redux'
import store, { persistor } from './store'
import UserPage from "./pages/UserPage";
import Categories from "./pages/Categories";
import Register from "./pages/Register";
import CategoryPage from "./components/Categories/CategoryPage";
import CheckOut from "./pages/CheckOut";
import ProtectedRoute from "./components/common/ProtectedRoute";


import { PersistGate } from "redux-persist/integration/react";

function App() {
 
    

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Toaster/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="faq" element={<Search/>}/>
            <Route path="login" element={<LoginPage/>}/>
            <Route path="recomend" element={<Recomend/>}/>
            {/* <Route path="user" element={<UserPage/>}/> */}
            <Route path="categories" element={<Categories/>}/>
            <Route path="register" element={<Register/>}/>

            <Route path="/users/:name" element={<ProtectedRoute><UserPage/></ProtectedRoute>}/>
            
            <Route path="/users/:name"  element={<UserPage/>}/>
            <Route path="/categories/:name"  element={<CategoryPage/>}/>
            <Route path="checkout" element={<CheckOut/>} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
     
  )
}

export default App;
