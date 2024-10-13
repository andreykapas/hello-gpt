import PostItem from './PostItem.jsx';

const Sidebar = () => {
  const posts = [
    {
      title: 'Delightful as he it acceptance an solicitude',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'She Alteration Everything Sympathize Impossible',
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <aside>
      <h3>Recent Posts</h3>
      <ul>
        {posts.map((post, index) => (
          <PostItem key={index} title={post.title} imageUrl={post.imageUrl} />
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
