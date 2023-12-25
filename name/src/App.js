import { useLocation, useOutlet } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './App.css';
import NavBar from './components/NavBar/Navbar';

function App() {
  const location = useLocation()
  const currentOutlet = useOutlet()

  return (
    <div className='appContainer'>
      <NavBar />
      <div style={{ maxHeight: '100%', width: '800px', overflowY: 'scroll', overflowX: 'hidden ' }}>
        <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            timeout={200}
            classNames="page"
            unmountOnExit
          >
            {() => (
              <>
                {currentOutlet}
              </>
            )}
          </CSSTransition>
        </SwitchTransition>
      </div>

    </div >
  );
}

export default App;
