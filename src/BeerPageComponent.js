import React from 'react';
import BeerCardComponent from './BeerCardComponent';
import BeerDetailedDialogComponent from './BeerDetailedDialogComponent';
import _ from 'lodash';
 
const BeerPageComponent = ({beerList,}) =>{
    const [open, setOpen] = React.useState(false);
    const [selectedBeer, setSelectedBeer] = React.useState({});

    const extendDetail = params=>{
        setOpen(true); 
        setSelectedBeer(params);
    }

    const handleClose = event =>{
        setOpen(false);
    }

    const beerListArray = beerList.map((obj,key)=> <div key={key} className="beer-wrapper col-xs-3">
                                <BeerCardComponent {...obj} extendDetail={extendDetail}/>
                            </div>);

    const groupByThree = _.chunk(beerListArray,3);

    const beerListHTML = groupByThree.map((obj,key)=><div className="row beer-col-3" key={key}>{obj}</div>)
    
    return (<>
        <BeerDetailedDialogComponent selectedBeer={selectedBeer} open={open} handleClose={handleClose}/>
        <div className="list">{beerListHTML}</div>
    </>)
}

export default BeerPageComponent;