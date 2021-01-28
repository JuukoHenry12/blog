import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <nav className="navbar">
        <h1>Henry's blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">Add blog</Link>
       </div>
    </nav>
  );
};

export default Navbar;
