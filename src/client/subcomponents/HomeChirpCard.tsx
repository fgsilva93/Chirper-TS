import * as React from 'react';
import { IChirps } from '../utils/types';
// import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const HomeChirpCard: React.FC<HomeChirpCardProps> = props => {

    const history = useHistory();

    return (
        <div className="col-md-6 mx-1">
            <div onClick={() => history.push(`/details/${props.chirp.id}`)} className="card my-2 shadow">
                <div className="card-body text-center">
                    <h4 className="card-title">@{props.chirp.username}</h4>
                    <p className="card-text">{props.chirp.message}</p>

                    {/* <Link to={`/details/${props.chirp.id}`}>Get Details</Link> */}
                </div>
            </div>
        </div>
    );
}

interface HomeChirpCardProps {
    chirp: IChirps
};

export default HomeChirpCard;