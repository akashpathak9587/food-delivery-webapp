import { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../Context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
const FoodDisplay = ({category}) => {
  const { foodList } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2> 
      <div className="food-display-list">
        {foodList.map((item, index) => {
          if (category === 'all' || category === item.category) {
            return <FoodItem key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image}/>
          }
        })}
      </div>
      </div>
  )
}

export default FoodDisplay