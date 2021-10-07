import React from 'react';
import {img} from '../../assets/img';

const MoviesDetail = (props) => {
    return (
    <div className="flex">
      <div className="flex-none w-48 relative">
        <img src={img.posterBlank} alt="poster-images" className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <div className="flex-auto p-6">
        <div className="flex flex-wrap">
          <h1 className="flex-auto text-xl font-semibold">
            Classic Utility Jacket
          </h1>
          <div className="w-full flex-none text-sm font-medium text-gray-500 mt-2">
            In stock
          </div>
        </div>
        <p className="text-sm text-gray-500">
          Free shipping on all continental US orders.
        </p>
      </div>
    </div>
    )
}

export default MoviesDetail;