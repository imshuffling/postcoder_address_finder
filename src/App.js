import { useState } from 'react';
import './App.css';
import Postcoder from 'react-address-lookup';

function App() {
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const logAddress = (addr) => {
    console.log(addr);
    setAddressLine1(addr.addressline1);
    setAddressLine2(addr.addressline2);
    setCity(addr.posttown);
    setPostalCode(addr.postcode);
  };

  return (
    <div className='app'>
      <h1>Postcoder.com address lookup</h1>
      <div>
        <Postcoder
          apiKey={process.env.REACT_APP_API_KEY}
          addressSelectedCallback={logAddress}
        />
      </div>

      <form className='address-form'>
        <div>
          <label id='address1'>Address Line 1</label>
          <input name='address1' type='text' value={addressLine1} />
        </div>
        <div>
          <label id='address2'>Address Line 2</label>
          <input name='address2' type='text' value={addressLine2} />
        </div>
        <div>
          <label id='city'>City</label>
          <input name='city' type='text' value={city} />
        </div>
        <div>
          <label id='postcode'>Post code</label>
          <input name='postcode' type='text' value={postalCode} />
        </div>
      </form>
    </div>
  );
}

export default App;
