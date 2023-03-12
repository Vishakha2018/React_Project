import React, { useState } from 'react'
import "./style.css"
import Menu from './MenuApi'
import MenuCard from './MenuCard'
import Navbar from './Navbar'


// export const Restaurant so no need to write export default restaurant  
// but need to import in { } in other file if use export const
const Restaurant = () => {
    //   style object
    //   const Mystyle={color:"blue"};

    //spread operator is used to copy array from object array so easy to access
    //new set is used to take unique value from an array 
    const uniqueCategory=[
        ...new Set(Menu.map((currentElement)=>{
            return currentElement.category
        })),
        "All"
    ]
    //so now whenever we are adding data in api then for new category it will create button and everything

    const [menuData, setMenuData] = useState(Menu)
    const [uniqueList,setUniqueList]=useState(uniqueCategory)


    const filterMenu = (category) => {
        if(category==="All"){
            setMenuData(Menu);
            return;
        }
        const updatedMenu = Menu.filter((element) => {
            return (
                category === element.category )
        })
        setMenuData(updatedMenu)
    }

    return (
        <>
            <Navbar filterMenu={filterMenu} uniqueList={uniqueList}/>
            <MenuCard menuData={menuData} />
        </>
    )
}

export default Restaurant
