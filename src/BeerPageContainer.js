import React,{Component} from 'react';
import {connect} from 'react-redux'; 
import { getBeerAction } from './action';
import BeerPageComponent from './BeerPageComponent';
import SearchBoxComponent from './SearchBoxComponent';
import NoDataFoundComponent from './NoDataFoundComponent';
import {Skeleton} from '@material-ui/lab';

class BeerPageContainer extends Component{
    constructor(props) {
        super(props);
        props.getBeer();
    }

    onSearchSubmit= params => {debugger;this.props.getBeer(params);}

    render(){
        const {beerList, isLoading} = this.props;

        return (<>
            <SearchBoxComponent onSearchSubmit={this.onSearchSubmit}/>
            {isLoading && <Skeleton className="list" variant="rect" width={210} height={118}/>}
            {!isLoading && beerList.length>0 && <BeerPageComponent beerList={beerList}/>}
            {!isLoading && beerList.length===0 && <NoDataFoundComponent/>}
        </>)
    }
}

const mapStateToProps = state =>{
    return {
        beerList: state.beerList||{},
        isLoading: state.isLoading
    }
}

const mapDispatchToProps = dispatch =>({
    getBeer : params=>getBeerAction(params)(dispatch)    
})

export default connect(mapStateToProps, mapDispatchToProps)(BeerPageContainer);