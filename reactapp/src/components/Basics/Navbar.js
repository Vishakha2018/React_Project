import React from 'react'

const Navbar = ({filterMenu, uniqueList}) => {
    return (
        <>
            <nav className='navbar'>
                <div className='btn-group'>
                    {
                        uniqueList.map((currentElement)=>{
                            return(
                            <button className='btn-group__item' onClick={()=>{filterMenu(currentElement)}}>{currentElement}</button>
                            )
                        })
                    }
                </div>
            </nav>
        </>
    )
}

export default Navbar
