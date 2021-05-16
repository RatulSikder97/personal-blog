import useDocumentTitle from '../../utils/useDocumentTitle';

const Blog = () => {
  useDocumentTitle('Blog | Personal Blog');
  return (
    <div className="blog container mt-5">
      <h3>Blog Page</h3>
    </div>
  );
};

export default Blog;
