export const SET_AUTH = 'SET_AUTH';

interface SetAuth {
    type: typeof SET_AUTH;
    token: string;
    expires: string;
    email: string;
}

export type SetAuthAction = SetAuth;

// Action creator
export const setAuthAction = (token: string, expires: string, email: string) => {
    console.log('token = ' + token);
    return {
        type: SET_AUTH,
        token, expires, email,
    }
}