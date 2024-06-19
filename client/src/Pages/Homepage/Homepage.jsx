import Banner from "../../Components/Banner/Banner"
import Brands from "../../Components/Brands/Brands"
import Footer from "../../Components/Footer/Footer" 
import MostFeatured from "../../Components/MostFeatured/MostFeatured"
import Popularproducts from "../../Components/PopularProducts/Popularproducts"
import Promo from "../../Components/Promo/Promo"
import Services from "../../Components/Services/Services"
import './Homepage.css'

const Homepage = () => {
  return (
    <>
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
