import { BrowserRouter,Routes,Route } from "react-router";
import Home from "./pages/Home";
import Search from "./pages/Search";
import LoginPage from "./pages/LoginPage";
import { Toaster } from "react-hot-toast";

import { Provider } from 'react-redux'
import store from './store'


function App() {
 

  return (
    <Provider store={store}>
      <Toaster/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="search" element={<Search/>}/>
          <Route path="login" element={<LoginPage/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
     
  )
}

export default App
