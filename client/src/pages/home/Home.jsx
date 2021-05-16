import useDocumentTitle from '../../utils/useDocumentTitle';

const Home = () => {
  useDocumentTitle('Home | Personal Blog');

  return (
    <div className="home container mt-5">
      <h3>Home Page</h3>
    </div>
  );
};

export default Home;
