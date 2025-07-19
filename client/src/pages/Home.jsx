import { Link } from 'react-router-dom';
import UserForm from '../components/UserForm';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">User Management System by Soham</h1>
          <p className="text-gray-600 text-lg">Add new users to the database</p>
        </div>
        
        <UserForm />
        
        <div className="text-center mt-8">
          <Link 
            to="/users" 
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-green-700 transition duration-200"
          >
            View All Users
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;