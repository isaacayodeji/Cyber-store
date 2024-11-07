import { createBrowserRouter } from "react-router-dom";
import Layout from "../view/Layout/Index";
import {
  Cart,
  Categories,
  Orders,
  Payment,
  Products,
  Profile,
  SingleProduct,
} from "./lazyComponent";
import { routerPath } from "./helper";
import PageNotFound from "../view/PageNotFound/PageNotFound";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: routerPath.Products,
        Component: Products,
        children: [
          {
            Component: Products,
            index: true,
          },
        ],
      },
      {
        path: routerPath.SingleProduct,
        Component: SingleProduct,
      },
      {
        path: routerPath.Categories,
        Component: Categories,
      },
      {
        path: routerPath.Cart,
        Component: Cart,
      },
      {
        path: routerPath.Payment,
        Component: Payment,
      },
      {
        path: routerPath.Orders,
        Component: Orders,
      },
      {
        path: routerPath.Profile,
        Component: Profile,
      },
    ],
  },
]);
