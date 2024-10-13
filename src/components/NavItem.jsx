import PropTypes from 'prop-types';

const NavItem = ({ item }) => {
  return (
    <li>
      <a href="/">{item}</a>
    </li>
  );
};

NavItem.propTypes = {
  item: PropTypes.string.isRequired,
};

export default NavItem;
