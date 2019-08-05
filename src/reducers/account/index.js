import {LOGOUT_SUCCESS} from '../../types/account/index'
const initialState = {
    auth: {
        isAuthenticated: localStorage.getItem("token") ? true : false
    }
};

export default function accountReducer(state = initialState, action) {
    switch (action.type) {
        case LOGOUT_SUCCESS:
            localStorage.clear();
            return Object.assign({}, state, {
                auth: {
                    isAuthenticated: false
                }
            });
        default:
            return state
    }
}