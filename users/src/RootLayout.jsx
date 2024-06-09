
import { Outlet } from 'react-router-dom';
import Open from './components/open/Open';
function RootLayout() {
  return (
    <div>
         <Open/>
      <div style={{ minHeight: '100vh' }}>
        <Outlet />
      </div>

    </div>
  );
}

export default RootLayout;