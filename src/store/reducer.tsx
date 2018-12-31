import IState from '../interfaces/IState';
import { SetAuthAction, SET_AUTH } from './actions';

const initialState: IState = {
    auth: {
        token: '',
        expires: '',
        email: '',
    },
};

const reducer = (state = initialState, action: SetAuthAction) => {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                auth: {
                    token: action.token,
                    expires: action.expires,
                    email: action.email,
                }
            }
        default:
            return state;
    }
}

export default reducer;
