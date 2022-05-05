import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="center">
      <p>404 - Page Not Found!</p>
      <Link to="/">
        <FaHome className="mr-2" />
        Back To Home
      </Link>
    </div>
  );
}

export default NotFound;
