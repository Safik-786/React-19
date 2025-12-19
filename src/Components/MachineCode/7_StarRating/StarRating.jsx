import { hover } from 'framer-motion';
import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";

function StarRating() {

    const [hovered, setHovered] = useState(0)
    const [selectRating, setSelectRating]= useState(0)


    const [stars, setStars] = useState(new Array(10).fill(""))
    return (
        <div className='flex gap-2 border h-100 justify-center items-center'>

            {
                stars.map((Star, index) => {
                    return (
                        <span className='bg-white' key={index} >
                            <FaStar
                                onMouseEnter={() => setHovered(index+1)}
                                onMouseLeave={()=> setHovered(0)}
                                className={`h-10 cursor-pointer w-10 
                                    ${ index + 1 <= hovered && "text-amber-400"}
                                    ${ index + 1 <= selectRating && "text-amber-400"}
                                     `}
                                onClick={()=> setSelectRating(index+1)}
                            />
                        </span>
                    )
                })
            }

        </div>
    )
}

export default StarRating
