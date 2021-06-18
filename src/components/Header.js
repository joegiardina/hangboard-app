import Navigation from './Navigation';

const Header = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '15vh',
        backgroundColor: '#3e4c5e',
      }}
    >
      <h1 style={{color: 'white', marginLeft: '1rem'}}>Handboarding Log</h1>
      <Navigation style={{color: 'white', marginRight: '1rem'}} />
    </div>
  );
};

export default Header;
