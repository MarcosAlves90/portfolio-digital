import {useRef, Suspense, lazy} from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Navbar from './components/Navbar.jsx';

const MainPage = lazy(() => import('./pages/MainPage.jsx'));
const Footer = lazy(() => import('./components/Footer.jsx'));

function App() {
    const sectionRefs = useRef([]);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Navbar sectionRefs={sectionRefs}/>
            <MainPage sectionRefs={sectionRefs}/>
            <Footer/>
        </Suspense>
    );
}

MainPage.propTypes = {
    sectionRefs: PropTypes.shape({
        current: PropTypes.arrayOf(
            PropTypes.shape({
                getBoundingClientRect: PropTypes.func.isRequired
            })
        )
    }).isRequired
};

export default App;