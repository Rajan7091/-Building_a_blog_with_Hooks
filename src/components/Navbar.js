import{Link} from'react-router-dom';
function Navbar() {
  return(
    <div>
      <ul id="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="Create-post">CreatePost</Link>
        </li>
      </ul>
    </div>
  
  );
  
}

export default Navbar;
