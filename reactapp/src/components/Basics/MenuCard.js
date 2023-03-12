import React from 'react'


const MenuCard = ({ menuData }) => {
    return (
        <>
        {menuData.map = (curElement) => {
            return (
                <>
                    <div className='card-container'>
                        <div className='card'>
                            <div className='card-body'>
                                <span className='card-number card-circle subtle'>
                                    1
                                </span>
                                <span className='card-author subtle'
                                //inline css ====>>>  style={{color:"red"}} or we can use style object also ===>> style={Mystyle}
                                // but it is lengthy process so use direct css
                                >
                                    Breakfast
                                </span>
                                <h2 className='card-title'>Maggi</h2>
                                <span className='card-description subtle'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Fugit tempore illum sapiente nesciunt beatae porro omnis modi ad quaerat obcaecati
                                    doloribus incidunt natus, nemo unde. Perspiciatis eius amet totam asperiores.
                                </span>
                                <div className='card-read'>Read</div>
                            </div>
                            <img src={""} alt="images" className='card-media' />
                            <span className='card-tag subtle'>Order Now</span>
                        </div>
                    </div>
                </>
            )
        }}
        </>
    )
}

export default MenuCard
