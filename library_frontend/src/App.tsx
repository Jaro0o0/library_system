import { BrowserRouter,Routes,Route } from "react-router";
import Home from "./pages/Home";
import Search from "./pages/Search";
import LoginPage from "./pages/LoginPage";
import { Toaster } from "react-hot-toast";
import Recomend from "./pages/Recomend";

import { Provider } from 'react-redux'
import store from './store'
import UserPage from "./pages/UserPage";
import Categories from "./pages/Categories";
import Register from "./pages/Register";


function App() {
 
    

  return (
    <Provider store={store}>
      <Toaster/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="search" element={<Search/>}/>
          <Route path="login" element={<LoginPage/>}/>
          <Route path="recomend" element={<Recomend/>}/>
          <Route path="user" element={<UserPage/>}/>
          <Route path="categories" element={<Categories/>}/>
          <Route path="register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
     
  )
}

export default App
