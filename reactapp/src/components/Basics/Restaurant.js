import React, { useState } from 'react'
import "./style.css"
import Menu from './MenuApi'
import MenuCard from './MenuCard'


// export const Restaurant so no need to write export default restaurant  
// but need to import in { } in other file if use export const
const Restaurant = () => {
    //   style object
    //   const Mystyle={color:"blue"};

    const [menuData,setMenuData]=useState(Menu);
    // console.log(menuData,"menu")
    return (
        <>
            <MenuCard menuData={menuData}/>
        </>
    )
}

export default Restaurant
