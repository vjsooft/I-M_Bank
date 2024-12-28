
const initialLoginState = {
    isAuthenticated: false,
    loginData: null,
};
const initialState = {formData: null};
const milelePointState = {milelePoint: 11696000};

export const loginForm=(state = initialLoginState, action)=>{
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isAuthenticated:true,
                loginData: action.payload
        };
        case 'LOGOUT':
        return{
            ...state,
            isAuthenticated:false,
            loginData:null
        }
        default:
            return state;
    }
};
export const milelePointStatus=(state = milelePointState, action)=>{
    switch (action.type) {
        case 'SET_Milele_Point':
        return {
            ...state,
            state: action.payload
        };
        default:
            return state;
    }
};
export const flightBookingForm=(state = initialState, action)=>{
    // console.log('=========state  reducer flightBookingForm========>', state);
    
    switch (action.type) {
        case 'SET_FLIGHT_FORM_DATA':
        return {
            ...state,
            formData: action.payload
        };
        default:
            return state;
    }
};