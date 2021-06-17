import React from 'react';
import SingleStock from './SingleStock';


const StockList = ({ stocks }) => {

    const allStocks = stocks.map((stock) => {
        return (
            <SingleStock key={stock.id} stock={stock} />
        )
    })
    return (
        <div className="px-4 d-flex flex-wrap">
            {allStocks}
        </div>
    );
};


export default StockList;