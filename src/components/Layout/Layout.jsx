import AppBar from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';

export default function Layout() {
  return (
    <Container>
      <AppBar />
      <Outlet />
    </Container>
  );
}
