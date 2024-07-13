import React, { Fragment} from 'react'
import {FiSearch} from 'react-icons/fi'

const Search = () => {
    
 
    return (
        <Fragment>
            <form className=" self-center mt-[5%] " >
            <span className='search_div h-full  justify-center items-center lg:w-72'>
                <button className='searchbtn' ><FiSearch  /></button>
            <input type="text" placeholder='Search for products, brands and more' 
            className=' search caret-[#ff2459]' />
            </span>
            </form>
           
         
            
        </Fragment>
    )
}

export default Search