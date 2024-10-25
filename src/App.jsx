import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout.jsx"
import HomeSection from "./components/HomeSection.jsx"
import MenSection from "./components/MenSection.jsx"
import WomenSection from "./components/WomenSection.jsx"
import axios from "axios"
import { useEffect, useState } from "react"
import DisplaySection from "./components/DisplaySection.jsx"
import { Provider, useSelector } from "react-redux"
import appStore from "./utils/appStore.js"
// import { Children } from "react"
function App() {
  const [productData, setProductData] = useState([]);
  useEffect(()=>{
    console.log("UF CALLED");
    
    fetchData();
  },[])

  const reduxData = useSelector((store)=>store.product.allProducts)
  console.log(reduxData);
  
  const fetchData = async () =>{
    try {
      const response = await axios.get(import.meta.env.VITE_API);
      // console.log(response);
      
      const {categories} = response.data.record;  //main data
      // console.log(categories);
      setProductData(categories);
    } catch (error) {
      console.log(error);
    }
  }
  
  
  if(productData.length==0){
    console.log("Loading....");
    
    return <h1 className="bg-red-800 z-50">Loading....</h1>
  }
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
    
    children: [
      {
        path: "/",
        element: <HomeSection setData={productData}/>
      },
      {
        path: "mens",
        element: <MenSection />
      },
      {
        path: "womens",
        element: <WomenSection />
      },
      {
        path: "productDetails/:id",
        element: <DisplaySection />
      },
    ]
  }
  ])

  return (
    <Provider store={appStore}>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  )
}

export default App
