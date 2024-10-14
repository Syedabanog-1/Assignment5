const Navbar = () => {
    return (
      <nav className="flex justify-between p-4 bg-gray-800 text-white">
        <span className="font-bold">Syeda</span>
        <div>
          <a href="#about" className="px-4">About</a>
          <a href="#projects" className="px-4">Projects</a>
          <a href="#contact" className="px-4">Contact</a>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  