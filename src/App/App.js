import './App.scss';

import { Routes, Route } from 'react-router-dom';

import Header from './components/header/header';
import ComicsPage from './components/comicsPage/comicsPage';
import HomePage from './components/homePage/homePage';


const App = () => {

    return (
        <div className="app">
            <Header />
            <Routes>
                <Route exact path='/' element={<HomePage />} />
                <Route path='comics' element={<ComicsPage />} />
            </Routes>
        </div>
    )
}

export default App;