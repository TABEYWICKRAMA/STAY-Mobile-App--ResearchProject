import {Action} from 'redux';
import {ActionTypes} from './actionTypeEnums';

export interface IGreetingActionType extends Action {
    type: ActionTypes.GREETING_SCREEN_SET_SOME_PROP;
    someProp: string;
}
