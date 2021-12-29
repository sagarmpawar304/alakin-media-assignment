import { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SuspenseLoading from './components/componentSuspenseLoading';

import Error404 from './pages/404';

const Home = lazy(() => import('./pages/home'));

function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<SuspenseLoading />}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='*' element={<Error404 />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
