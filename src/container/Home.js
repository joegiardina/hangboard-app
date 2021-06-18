import {useSelector} from 'react-redux';

const Home = () => {
  const user = useSelector(state => state.user.user);
  return (
    <div
      style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}
    >
      <h1 style={{marginTop: 20, marginBottom: 20}}>
        Welcome to Hangboard App!
      </h1>
      {!!user ? (
        <p>Hello, {user.name}!</p>
      ) : (
        <p>
          Please <a href="/login">log in</a>
        </p>
      )}
    </div>
  );
};

export default Home;
