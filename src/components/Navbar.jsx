import { Link } from "react-router";
function Navbar() {
  return (
    <nav>
      <div>
      <Link to='/'><h2>JobTracker</h2></Link>
      {/* <Link to='/'><h2>Home</h2></Link>
      <Link to='/about'><h2>About</h2></Link>
      <Link to='/login' ><button>Login</button></Link> */}
      </div>
    </nav>
  );  
}

export default Navbar;
