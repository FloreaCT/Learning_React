import React from 'react';

const list = [
    'The beach',
    'The mountains',
    'Vibrant cities',
    'Roughing it',
    'Ultimate survival'
]

const UltimateHolidayList = () => <section>
    <h1>Ultimate Holiday Destinations</h1>
    {/* {list.map((item)=> <ul>{item}</ul>)}  */}
    <ul>
        {list.map(item => 
        <li key={item}>{item}</li>)}
    </ul>
</section>;

export default UltimateHolidayList