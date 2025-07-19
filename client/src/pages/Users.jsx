import { Link } from 'react-router-dom';
import UserList from '../components/UserList';

const Users = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <Link 
            to="/" 
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-4"
          >
            ← Back to Add User
          </Link>
        </div>
        
        <UserList />
      </div>
    </div>
  );
};

export default Users;