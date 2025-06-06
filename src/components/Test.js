import React, { useEffect, useState } from 'react'

const Test = () => {

    // const [names, setNames] = useState([]);
    // const [selectedName, setSelectedName] = useState('');

    // useEffect(()=>{
    //  fetch("https://api.coinbase.com/v2/currencies")
    //  .then(response => response.json())
    //  .then(data => {
    //   setNames(data.data)
    //   console.log(data.data)
    //  })
    //  .catch(error => {
    //   console.log('error', error)
    //  });
    // },[]);

    // const handleChange = (e) =>{
    //   setSelectedName(e.target.value);
    // }

  return (
    <div>
      <select id='name-select' value={selectedName} onChange={handleChange}>
        <option value="">choose a name</option> 
          {names.map(currency => (
            <option key={currency.id} value={currency.id}>
              {currency.name}
            </option>
          ))}  
      </select>
    </div>
  )
}

export default Test
