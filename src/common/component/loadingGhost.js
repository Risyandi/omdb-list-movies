import React from 'react';
import {img} from '../../assets/img';

const LoadingGhost = (props) => {
    let positionLoading = props.loadingCenter;
    return (
        positionLoading !== true ?
            <div className="text-center">
                <img src={img.loadingGhost} alt="loading" className="mx-auto w-24 h-24" />
            </div> 
        :
            <div className="flex h-screen justify-center items-center">
                <img src={img.loadingGhost} alt="loading" className="mx-auto w-24 h-24" />
            </div> 
    )
}

export default LoadingGhost;