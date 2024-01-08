import {ActionTypes} from './actionTypeEnums';
import {IGreetingActionType} from './actionTypes';

export const greetingAction = (someProp: string): IGreetingActionType => ({
    type: ActionTypes.GREETING_SCREEN_SET_SOME_PROP,
    someProp,
});
