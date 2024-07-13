import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'

const sidebar = () => {
  return (
    <Fragment>
        <div className=''>
         <ul>
           <Link to="/Glamsales">
           <li className='text-sm py-6 border-b-[1px] mr-6 text-slate-500'>OVERVIEW</li>
           </Link>

           <Link to="/Designer">
           <h1 className='text-slate-400 text-sm pt-6'>Profile</h1>
           </Link>
           <Link to="/UpdateDesigner">
           <li className='text-sm pt-3 mr-6 text-slate-500'>Update Profile</li>
           </Link>
           <Link to="/UploadAvatar">
           <li className='text-sm mr-6 text-slate-500'>Upload Avatar</li>
           </Link>
           <Link to="/UpdatePassword">
           <li className='text-sm pb-6 pt-3 border-b-[1px] mr-6 text-slate-500'>Update Password</li>
           </Link>

           <Link to="/Idea">
           <h1 className='text-slate-400 text-sm pt-6'>Idea</h1>
           </Link>
           <Link to="/AddIdea">
           <li className='text-sm pb-6 border-b-[1px] mr-6 text-slate-500'>Add Idea</li>
           </Link>

         </ul>
        </div>
    </Fragment>
  )
}

export default sidebar