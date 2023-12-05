import Home from "./Pages/Home/Home"
import Products from "./Pages/Products/Products"
import OrderProducts from "./Pages/OrderProducts/OrderProducts"
import AboutUs from "./Pages/AboutUs/AboutUs"
import Login from "./Pages/Login/Login"
import Backet from "./Pages/Backet/Backet"
import Articles from "./Pages/Articles/Articles"
import FinalConfirmation from "./Pages/FinalConfirmation/FinalConfirmation"
import ArticleText from "./Pages/ArticleText/ArticleText"
import ContactUs from "./Pages/ContactUs/ContactUs"



let routes = [
    { path: '/', element: <Home /> },
    { path: '/Products', element: <Products /> },
    { path: '/OrderProducts/:productId', element: <OrderProducts /> },
    { path: '/AboutUs', element: <AboutUs /> },
    { path: '/ContactUs', element: <ContactUs /> },
    { path: '/Login', element: <Login /> },
    { path: '/Backet', element: <Backet /> },
    { path: '/Articles', element: <Articles /> },
    { path: '/Article/:ArticleId', element: <ArticleText /> },
    { path: '/FinalConfirmation', element: <FinalConfirmation /> },

]

export default routes