import {AnyAction} from 'redux';
import {ActionTypes} from './actionTypeEnums';
import {IGreetingActionType} from './actionTypes';

export interface IGreetingScreenStateType {
    someProp: string;
}

export const initState: IGreetingScreenStateType = {
    someProp: '',
};

export const greetingScreenReducer = (state: IGreetingScreenStateType = initState, action: AnyAction) => {
    switch (action.type) {
        case ActionTypes.GREETING_SCREEN_SET_SOME_PROP:
            return {
                ...state,
                someProp: (action as IGreetingActionType).someProp,
            };
        default:
            return state;
    }
};
