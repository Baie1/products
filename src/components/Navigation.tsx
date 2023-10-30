import React from 'react'
import {Link} from 'react-router-dom'


export function  Navigation()  {
	return (
		<nav className='h-[50px] flex justify-between items-center px-5 bg-red-900 text-white '>
			<span className='font-bold '>React 2022</span>

			<span>
				<Link to='/'className='mr-2' >Products</Link>
				<Link to='/about' >Products</Link>
			</span>
		</nav>
	)
}

