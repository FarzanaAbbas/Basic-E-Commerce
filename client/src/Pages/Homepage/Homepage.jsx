import Banner from "../../Components/Banner/Banner"
import Brands from "../../Components/Brands/Brands"
<<<<<<< HEAD
import Footer from "../../Components/Footer/Footer" 
import MostFeatured from "../../Components/MostFeatured/MostFeatured"
=======
import Footer from "../../Components/Footer/Footer"
import MostFeatured from "../../Components/MostFeatured/MostFeatured"
import Navbar from "../../Components/Navbar/Navbar"
>>>>>>> 337ff2f0eb705c45cd38a1fc63dc368e24fb9d47
import Popularproducts from "../../Components/PopularProducts/Popularproducts"
import Promo from "../../Components/Promo/Promo"
import Services from "../../Components/Services/Services"
import './Homepage.css'

<<<<<<< HEAD
const Homepage = () => {
  return (
    <>
=======

const Homepage = () => {
  return (
    <>
      <Navbar />
>>>>>>> 337ff2f0eb705c45cd38a1fc63dc368e24fb9d47
      <div className="promo">
        <Banner />
        <Promo />
      </div>
      <Services />
      <MostFeatured />
      <Popularproducts />
      <Brands />
      <Footer />
    </>
  )
}

export default Homepage
