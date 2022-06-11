import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="section not-found">
      <p>404 - Page Not Found!</p>
      <Link className="not-found-btn" to="/">
        <FaHome />
        Back To Home
      </Link>
    </div>
  );
}

export default NotFound;
