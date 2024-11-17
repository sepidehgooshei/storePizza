import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CreateUser from '../user/CreateUser'
function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="mt-5 text-center sm:my-16">
      <h1 className='py-5'>
      The best pizza.
        <br />
        <span className="text-warning">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {!username ? (
        <CreateUser />
      ) : (
        <Link to="/menu">
          <button type="button" className="btn btn-warning">
            Continue ordering, {username}
          </button>
        </Link>
      )}
    </div>
  );
}

export default Home;


