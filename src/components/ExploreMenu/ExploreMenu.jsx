import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Satisfy your cravings with our fast and reliable food delivery service. Choose from a wide variety of delicious dishes, made fresh to order. Whether it's breakfast, lunch, or dinner, we've got you covered. Enjoy the convenience of having your favorite meals delivered straight to your doorstep</p>
        <div className="explore-menu-list">
            {menu_list.map((item, index) =>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?'All':item.menu_name)} key={index}
                    className="explore-menu-list-item">
                    <img className={category===item.menu_name?'active':""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>

                </div>
                )
                       
            })}
        </div>

     <hr /> 
    </div>
  )
}

export default ExploreMenu
