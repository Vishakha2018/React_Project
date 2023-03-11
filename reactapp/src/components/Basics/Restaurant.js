import React from 'react'
import "./style.css"


// export const Restaurant so no need to write export default restaurant  
// but need to import in { } in other file if use export const
const Restaurant = () => {
    //   style object
    //   const Mystyle={color:"blue"};

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
                    <img src="https://www.dreamstime.com/maggie-noodles-instant-served-bowl-over-rustic-wooden-background-selective-focus-image224001336" alt="images" className='card-media'/>
                    <span className='card-tag subtle'>Order Now</span>
                </div>
            </div>
        </>
    )
}

export default Restaurant
