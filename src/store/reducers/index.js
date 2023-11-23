import { persistCombineReducers } from 'redux-persist';
import Constants from '../../constants';
import AsyncStorage from '@react-native-community/async-storage';
import authReducer from './authReducer';

const config = {
    key: Constants.asyncStorageKey,
    storage: AsyncStorage,
    blacklist: []
}

const appReducer = persistCombineReducers(config,{
    auth: authReducer
})

const rootReducer = (state, action) => {
    return appReducer(state, action);
}


export default rootReducer;