import NavItem from './NavItem.jsx';

const Header = () => {
  const navItems = ['Home', 'Post Style', 'Feature', 'Pages', 'Categories'];

  return (
    <header>
      <div className="logo">BLOG</div>
      <nav>
        <ul>
          {navItems.map((item) => (
            <NavItem key={item} item={item} />
          ))}
        </ul>
      </nav>
    </header>
  );
};

// Don't forget to export your component!
export default Header;
