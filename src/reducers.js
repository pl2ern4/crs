import {appConstant} from './action';

const initialState = {
    beerList:[]
}

export const rootReducer = (state=initialState,action)=>{
    switch(action.type){
        case appConstant.REQUEST_GET_BEER:
            return {...state, isLoading:true};

        case appConstant.FAILED_GET_BEER:{
            return {...state, isLoading:false, message:"failed"};
        }

        case appConstant.SUCCESS_GET_BEER:{
            return {...state, isLoading:false, message:"success", beerList: action.result};
        }

        default:{
            return {...state}
        }
        
    }
}