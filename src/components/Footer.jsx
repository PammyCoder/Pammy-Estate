import React from 'react'
import CountUp from 'react-countup';


const Footer = () => {
  return (
    <div className='my-5 py-3 bg-sky-900 max-w-6xl mx-auto h-32'>
      <div className='grid grid-cols-3  text-center '>
<div><h2 className='text-white font-bold text-xl' >
<CountUp start={0} end={95}
    duration={2.75}
/>
%</h2>
<p className='text-white font-bold text-xl'>Success Rate</p>

</div>
<div><h2 className='text-white font-bold text-xl'>
<CountUp start={0} end={60}
    duration={2.75}
/>
%</h2>
<p className='text-white font-bold text-xl'>House Booking</p>

</div>

<div><h2 className='text-white font-bold text-xl'><CountUp start={0} end={30}
    duration={2.75}
/>%</h2>
<p className='text-white font-bold text-xl'>Request for booking</p>

</div>
  </div>

    </div>
  )
}

export default Footer