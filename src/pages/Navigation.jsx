import {Routes, Route} from "react-router-dom";

import HomePage from "./HomePage/HomePage";
import CategoriesPage from "./CategoriesPage/CategoriesPage";
import SingleCategoriesPage from "./SingleCategoriesPage/SingleCategoriesPage";
import SingleProductPage from "./SingleProductPage/SingleProductPage";

const Navigation = ()=> {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/categories/:id" element={<SingleCategoriesPage />} />
            <Route path="/products/:id" element={<SingleProductPage />} />
        </Routes>
    )
}

export default Navigation;