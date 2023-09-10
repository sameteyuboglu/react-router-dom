import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProductsPage from "./pages/ProductsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import Layout from "./nestedRoutes/Layout";
import History from "./nestedRoutes/History";
import Story from "./nestedRoutes/Story";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/detail/:id" element={<ProductDetail />} />
        <Route path="/categories" element={<Layout />}>
          <Route index element={<History/>}></Route>
          <Route path="story" element={<Story/>}></Route>
        </Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
