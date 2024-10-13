import PropTypes from 'prop-types';

const PostItem = ({ title, imageUrl }) => {
  return (
    <li>
      <img src={imageUrl} alt={title} />
      <p>{title}</p>
    </li>
  );
};

PostItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default PostItem;
