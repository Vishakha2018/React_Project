import React from 'react'

const MenuCard = ({ menuData }) => {
    return (
        <>
        <section className='main-card--container'>
            {menuData.map((currentElement)=>{
                    const {id,name,description,category,image}=currentElement
                 return (
                    <>
                        <div className='card-container'key={id}>
                            <div className='card'>
                                <div className='card-body' >
                                    <span className='card-number card-circle subtle'>
                                        {id}
                                    </span>
                                    <span className='card-author subtle'
                                    //inline css ====>>>  style={{color:"red"}} or we can use style object also ===>> style={Mystyle}
                                    // but it is lengthy process so use direct css
                                    >
                                        {category}
                                    </span>
                                    <h2 className='card-title'>
                                        {name}
                                    </h2>
                                    <span className='card-description subtle'>
                                        {description}
                                    </span>
                                    <div className='card-read'>Read</div>
                                </div>
                                <img src={image} alt="images" className='card-media' />
                                <span className='card-tag subtle'>Order Now</span>
                            </div>
                        </div>
                    </>
                );

            })}
           
        </section>
        </>
    )
}

export default MenuCard
