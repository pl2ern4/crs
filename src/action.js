import {getBeerService} from './services';

export const appConstant = {
    REQUEST_GET_BEER:'REQUEST_GET_BEER',
    FAILED_GET_BEER:'FAILED_GET_BEER',
    SUCCESS_GET_BEER:'SUCCESS_GET_BEER',
}

export const getBeerAction=payload=>{
    return dispatch=>{
        dispatch({type:appConstant.REQUEST_GET_BEER});
        getBeerService({
            beer_name: (payload && payload.beer_name)|| ''
        }).then(result=>{
            dispatch({
                type:appConstant.SUCCESS_GET_BEER,
                result
            })
        }).catch(error=>{
            dispatch({
                type:appConstant.FAILED_GET_BEER
            })
        });
    }
}