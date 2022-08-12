import Home from "./Pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from "./Pages/Category";
import { CartContextProvider } from "./CartContext";
import Account from "./Pages/Account";
import TopBar from "./Components/TopBar";
import CheckoutPage from "./Pages/CheckoutPage";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <TopBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:type" element={<Category />} />
            <Route path="/checkoutpage" element={<CheckoutPage />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}
export default App;
