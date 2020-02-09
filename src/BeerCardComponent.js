import React from 'react';

const BeerCardComponent = ({...props}) =>{
    return (<div className="row beer_dialog" onClick={()=>props.extendDetail(props)}>
                <div className="col-xs-4">
                    <img src={props.image_url} alt="name" className="beer_image"/>
                </div>
                <div className="col-xs-8">  
                    <span className="beer_name">{props.name}</span>
                    <p className="beer_description">{props.description}</p>
                </div>
	        </div>)
}

export default BeerCardComponent;