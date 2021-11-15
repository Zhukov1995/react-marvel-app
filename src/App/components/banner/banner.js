import './banner.scss';

import Avengers from './Avengers.png';
import AvengersLogo from './Avengers logo.png';

const Banner = () => {
    return (
        <div className="banner">
            <img src={Avengers} alt="Avengers" className='avengers' />
            <div className="banner_info">
                <h3>New comics every week!</h3>
                <h3>Stay tuned!</h3>
            </div>
            <img src={AvengersLogo} alt="MarvelAvengerslogo" className='avengersLogo' />
        </div>
    )
}

export default Banner;