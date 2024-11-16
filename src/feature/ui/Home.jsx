import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CreateUser from '../user/createUser';

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



// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import CreateUser from '../user/CreateUser';

// function Home() {
//   const username = useSelector((state) => state.user.username);

//   return (
//     <div className="mt-5 text-center sm:my-16">
//       <h1 className='py-5'>
//         The best pizza.
//         <br />
//         <span className="text-warning">
//           Straight out of the oven, straight to you.
//         </span>
//       </h1>

//       {!username ? (
//         <CreateUser />
//       ) : (
//         <Link to="/menu">
//           <button type="button" className="btn btn-warning">
//             Continue ordering, {username}
//           </button>
//         </Link>
//       )}
//     </div>
//   );
// }

// export default Home;





// import CreateUser from "../../feature/user/createUser";

// export default function Home(){
//   return(

// <div className="container d-flex justify-content-center align-items-center min-vh-100">
//       <div className="row w-100">
//         <div className="col text-center">
//           <div className="my-4">
//             <h1>
//               The best pizza.
//               <br />
//               <span className="text-warning">
//                 Straight out of the oven, straight to you.
//               </span>
//             </h1>
//           </div>
//           <CreateUser />
//         </div>
//       </div>
//     </div>
//   )
// }






//  import CreateUser from "../../feature/user/createUser";

// export default function Home() {
//   return (
//     <div className="container d-flex justify-content-center align-items-center min-vh-100">
//       <div className="row">
//         <div className="col-md-6 offset-md-3 text-center">
//           <div className="my-4">
//             <h1>
//               The best pizza.
//               <br />
//               <span className="text-warning">
//                 Straight out of the oven, straight to you.
//               </span>
//             </h1>
            
//           </div>
//           <CreateUser/>
//         </div>
//       </div>
//     </div>
//   );
// }




