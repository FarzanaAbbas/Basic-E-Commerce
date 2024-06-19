import Marquee from 'react-fast-marquee'
import './Brands.css'

const fakeBranddata = [
  {
    id: 1,
    image: 'images/akupdted.jpg'
  },
  {
    id: 2,
    image: 'images/appleupdted.jpg'
  },
  {
    id: 3,
    image: 'images/casioupdted.png'
  },
  {
    id: 4,
    image: 'images/rlupdted.jpg'
  },
  {
    id: 5,
    image: 'images/thupdted.jpeg'
  },
  {
    id: 6,
    image: 'images/tsn.jpg'
  }
]


<<<<<<< HEAD
=======

>>>>>>> 337ff2f0eb705c45cd38a1fc63dc368e24fb9d47
const Brand = () => {
  return (
    <div className='brands-container'>
      <Marquee>
<<<<<<< HEAD
        {/* map : converting array or lists to render ++each item as a component */}
        {/* key : it is a property. which helps react to identify which items have changed,are added or are removed */}
        {fakeBranddata.map((Brand) => {
          return (
            <img src={Brand.image} key={Brand.id} className='marquee-image' alt="brand-image" />
=======
        {fakeBranddata.map((Brand) => {
          return (
            <img src={Brand.image} key={Brand.id} className='marquee-image' alt="brand-image" />

>>>>>>> 337ff2f0eb705c45cd38a1fc63dc368e24fb9d47
          )
        })}
      </Marquee>
    </div>
  )
}

export default Brand
