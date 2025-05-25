import RootLayout from "@/layout/root";
import About from "@/pages/about";
import Blog from "@/pages/blog";
import BlogWithSidebar from "@/pages/blog-with-sidebar";
import BlogStandard from "@/pages/blog-standard";
import Cart from "@/pages/cart";
import Checkout from "@/pages/checkout";
import CookiePolicy from "@/pages/cookie-policy";
import Faq from "@/pages/faq";
import Gallery from "@/pages/gallery";
import AIAgents from "@/pages/home";
import AIAgentsFour from "@/pages/home-four";
import AIAgentsThree from "@/pages/home-three";
import AIAgentsTwo from "@/pages/home-two";
import NotFound from "@/pages/not-found";
import AppStore from "@/pages/portfolio";
import AppStoreDetails from "@/pages/portfolio-details";
import Pricing from "@/pages/pricing";
import PrivacyPolicy from "@/pages/privacy-policy";
import ProductsList from "@/pages/products-list";
import APIHub from "@/pages/services";
import APIHubDetails from "@/pages/services-details";
import SingleProducts from "@/pages/single-products";
import Team from "@/pages/team";
import TermCondition from "@/pages/term-condition";
import { createBrowserRouter } from "react-router-dom";
import BlogDetails from "@/pages/blog-details";
import Contact from "@/pages/contact";
import Login from "@/pages/login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <AIAgents />
            },
            {
                path: "/home-two",
                element: <AIAgentsTwo />
            },
            {
                path: "/home-three",
                element: <AIAgentsThree />
            },
            {
                path: "/home-four",
                element: <AIAgentsFour />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/portfolio",
                element: <AppStore />
            },
            {
                path: "/portfolio-details",
                element: <AppStoreDetails />
            },
            {
                path: "/services",
                element: <APIHub />
            },
            {
                path: "/services-details",
                element: <APIHubDetails />
            },
            {
                path: "/team",
                element: <Team />
            },
            {
                path: "/faq",
                element: <Faq />
            },
            {
                path: "/products-list",
                element: <ProductsList />
            },
            {
                path: "/single-products",
                element: <SingleProducts />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/checkout",
                element: <Checkout />
            },
            {
                path: "/gallery",
                element: <Gallery />
            },
            {
                path: "/pricing",
                element: <Pricing />
            },
            {
                path: "/not-found",
                element: <NotFound />
            },
            {
                path: "*",
                element: <NotFound />
            },
            {
                path: "/term-condition",
                element: <TermCondition />
            },
            {
                path: "/privacy-policy",
                element: <PrivacyPolicy />
            },
            {
                path: "/cookie-policy",
                element: <CookiePolicy />
            },
            {
                path: "/blog-standard",
                element: <BlogStandard />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/blog-sidebar",
                element: <BlogWithSidebar />
            },
            {
                path: "/blog-details",
                element: <BlogDetails />
            },
            {
                path: "/contact",
                element: <Contact />
            },
        ]
    },
    {
        path:"/login",
        element:<Login/>
    }
])