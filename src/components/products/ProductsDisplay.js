import powder from '../../img/moringapowder.jpg'
import tea from "../../img/moringatea.jpg"
import shake from "../../img/moringashake.jpg"
import bulk from "../../img/moringabulk.jpg"
import First from '../../img/Plant1.jpg'
import Second from '../../img/Plant2.jpg'
import Third from '../../img/Plant3.jpg'
import Fourth from '../../img/Plant4.jpg'

const arrayOfObjects = [
    {
        id: "1",
        product: "Moringa Powder",
        description: "Moringa Leaves brought to you in a convenient way!",
        price: "R100/KG",
        imageUrl: {powder},
    },{ 
        id: "2",
        product: "Moringa Tea",
        description: "For those whp enjoy a hot cup of tea ;)",
        price: "40/box",
        imageUrl: {tea},
    },{
        id: "3",
        product: "Moringa Shake",
        description: "To shake things up!",
        price: "R50/1L",
        imageUrl: {shake},
    },{
        id: "4",
        product: "Bulk Order",
        description: "Contact us for more details",
        price: "N/A",
        imageUrl: {bulk},
    }
  ];
  
  export default function MyReactComponent() {
    return (
        <section className="shop">
          <div className='container3'>
        <h2>Our Range</h2>
        </div>
      <div className='mycontainer2'>
         <div class="row2">
  <div class="column2">
    <div className='zoom'>
      <br/>
  <h2 className='text-center2'>Moringa Powder</h2>
  <p className='text-center3'>Price: R100/KG</p>
  <p className='text-center3'>Moringa Leaves brought to you in a convenient way!</p>
  <img key='1' src={First} alt='1' className='border'/>
  </div>
  <div className='zoom'>
  <h2 className='text-center2'>Moringa Tea</h2>
  <p className='text-center3'>Price: R40/Box</p>
  <p className='text-center3'>For those whp enjoy a hot cup of tea</p>
  <img key='2' src={Second} alt='2' className='border'/>
  </div>
  </div>
  <div class="column2">
  <div className='zoom'>
  <br/>
  <h2 className='text-center2'>Moringa Shake</h2>
  <p className='text-center3'>Price: R50/l</p>
  <p className='text-center3'>To shake things up!</p>
  <img key='3' src={Third} alt='3' className='border'/>
  </div> <div className='zoom'>
  <h2 className='text-center2'>Bulk Order</h2>
  <p className='text-center3'>Price: Dependent On Order</p>
  <p className='text-center3'>Contact us for more details</p>
    <img key='4' src={Fourth} alt='4' className='border'/>
    </div>
  </div>
  </div>
            
       {/*{arrayOfObjects.map(({id, product, description, price, imageUrl}) => (
            <div>
             
           
          <p key={id}><br/>     
           Product: {product}<br/>Description: {description}. Price: {price}</p>
           </div>
        ))}*/}
        
      </div>
      </section>
    );
  }