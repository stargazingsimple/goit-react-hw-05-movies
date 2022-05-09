import { Link } from './Navigation.styled';

export default function Navigation() {
  return (
    <nav>
      <Link to="/">Main</Link>
      <Link to="/movies">Movies</Link>
    </nav>
  );
}
