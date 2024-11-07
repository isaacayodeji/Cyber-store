import { lazy } from "react";

const Products = lazy(() => import("../view/Products/Products"));
const Categories = lazy(() => import("../view/Categories/Categories"));
const Cart = lazy(() => import("../view/Cart/Cart"));
const Orders = lazy(() => import("../view/Orders/Orders"));
const SingleProduct = lazy(() => import("../view/SingleProduct/SingleProduct"));
const Payment = lazy(() => import("../view/Payment/Payment"));
const Profile = lazy(() => import("../view/Profile/Profile"));

export { Cart, Categories, Orders, Payment, Products, SingleProduct,Profile };
