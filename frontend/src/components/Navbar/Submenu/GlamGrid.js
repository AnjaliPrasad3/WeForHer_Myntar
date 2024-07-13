import React,{Fragment} from 'react'
import {Casual, Formal, SemiFormal, Festive, Sporty, Beachwear, Loungewear, Travel, SpecialEvents, Professional} from '../NavbarSub.js'
import { useTransition, animated } from 'react-spring'
import { Link } from "react-router-dom";

const GlamGrid = ({show, CMenu, parentCallback}) => {
  const transitions = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 300,
    
  })
  let H = window.innerHeight - 80
    
  return (
   <Fragment>
       <div className={`w-[100%] h-screen bg-[#64646435] sticky top-0  ${CMenu} z-10 font1 `}>
       { transitions((styles, item) => item && <animated.div style={styles}>
        <div className={`container max-w-[90%] w-[90%] mx-auto h-[480px] ${CMenu}  Mmenu bg-white `}
          onMouseEnter={() => parentCallback('block', true)} onMouseLeave={() => parentCallback('hidden', false)}
        >
          <div className='grid grid-cols-5 px-8 py-4 cursor-pointer'>
             

            <div className=" h-[418px] ">
            <h1 className='font1 font-semibold'>Are You A designer?</h1>
            <h1 className='font1 font-extralight text-sm '>To showcase your design login as designer  <br /></h1>
            <Link className='dec' to="/Login">
                <button className=' font1 font-smibold text-[#ff3f6c] text-sm border-[1px] px-3 py-2 
                   border-[#d4d5d8] hover:border-[#ff3f6c] '>LOGIN/&nbsp;SIGNUP</button>
              </Link>   
              <hr className='py-1 mt-2' />
              <h1 className='text-[#fb56c1] text-sm font-semibold py-1'>Special&nbsp;Events</h1>
              {SpecialEvents.map((data) =>
                <Link to='/products'><li className='litext list-none py-0.5 hover:font-semibold'onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}
            </div>

            <div className=" h-[418px] ">
            
            <h1 className='text-[#fb56c1] text-sm font-semibold py-1'>Casual</h1>
              {Casual.map((data) =>
                <Link to='/products'><li className='litext list-none py-0.5 hover:font-semibold'onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}
              <hr className='py-1' />
              <h1 className='text-[#fb56c1] text-sm font-semibold py-1'>Festive</h1>
              {Festive.map((data) =>
                <Link to='/products'><li className='litext list-none py-0.5 hover:font-semibold'onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}
            </div>

            <div className=" h-[418px] ">
            <h1 className='text-[#fb56c1] text-sm font-semibold py-1'>Formal</h1>
              {Formal.map((data) =>
                <Link to='/products'><li className='litext list-none py-0.5 hover:font-semibold'onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}
              <hr className='py-1' />
              <h1 className='text-[#fb56c1] text-sm font-semibold py-1'>Semi&nbsp;Formal</h1>
              {SemiFormal.map((data) =>
                <Link to='/products'><li className='litext list-none py-0.5 hover:font-semibold'onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}
              <hr className='py-1' />
              <h1 className='text-[#fb56c1] text-sm font-semibold py-1'>Professional</h1>
              {Professional.map((data) =>
                <Link to='/products'><li className='litext list-none py-0.5 hover:font-semibold'onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}
            </div>

            <div className=" h-[418px] ">
            <h1 className='text-[#fb56c1] text-sm font-semibold py-1'>Travel</h1>
              {Travel.map((data) =>
                <Link to='/products'><li className='litext list-none py-0.5 hover:font-semibold'onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}
              <hr className='py-1' />
              <h1 className='text-[#fb56c1] text-sm font-semibold py-1'>Sporty</h1>
              {Sporty.map((data) =>
                <Link to='/products'><li className='litext list-none py-0.5 hover:font-semibold'onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}

            </div>

            <div className=" h-[418px] ">
            <h1 className='text-[#fb56c1] text-sm font-semibold py-1'>Beachwear</h1>
              {Beachwear.map((data) =>
                <Link to='/products'><li className='litext list-none py-0.5 hover:font-semibold'onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}
              <hr className='py-1' />
              <h1 className='text-[#fb56c1] text-sm font-semibold py-1'>loungewear</h1>
              {Loungewear.map((data) =>
                <Link to='/products'><li className='litext list-none py-0.5 hover:font-semibold'onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}
            </div>

          </div>

        </div>
        </animated.div>
      )}
      </div>
   </Fragment>
  )
}

export default GlamGrid