import React from 'react'
import {AiFillPhone, AiOutlineClockCircle} from 'react-icons/ai';
import {BsChatSquareDots} from 'react-icons/bs'

const TopBar = () => {
  return (
    <div>
        <div>
            <BsChatSquareDots />
            <h1>WEEKDAY</h1>
        </div>
        <div>
            <AiOutlineClockCircle />
            <p>9AM - 5PM</p>
        </div>
        <div>
            <AiFillPhone />
            <p>1-888-817-1234</p>
        </div>
        <button>Get a Free Quote</button>
    </div>
  )
}

export default TopBar