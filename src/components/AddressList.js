import './AddressList.css';

const AddressList = props => {
  const { addresses, showFlag } = props;
  console.log('addresses', addresses);
  return (
    <div>
      <h1>Addresses</h1>
      <ul>
        {addresses.map(address => (
          <div className='address' key={address.id}>
            <li >
              <span>Address: </span>
              {address.full_address}
            </li>
            <li>
              <button
                onClick={() => {
                  showFlag(address.country_code);
                }}>
                Show Flag
              </button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default AddressList;
