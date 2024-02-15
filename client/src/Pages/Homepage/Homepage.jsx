import Banner from "../../Components/Banner/Banner"
import Brands from "../../Components/Brands/Brands"
import Footer from "../../Components/Footer/Footer"
import MostFeatured from "../../Components/MostFeatured/MostFeatured"
import Navbar from "../../Components/Navbar/Navbar"
import Popularproducts from "../../Components/PopularProducts/Popularproducts"
import Services from "../../Components/Services/Services"


const Homepage = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Services/>
    <MostFeatured/>
    <Popularproducts/>
    <Brands/>
    <Footer/>
    </>
  )
}

export default Homepage
