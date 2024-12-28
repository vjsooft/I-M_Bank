export const setLogin = (data)=>{
    return{
        type: 'LOGIN',
        payload: data
    }
}
export const setLogout = (data)=>{
    return{
        type: 'LOGOUT',
    }
}
export const setMilelePoint = (data)=>{
    return{
        type: 'SET_Milele_Point',
        payload: data
    }
}
export const setFlightFormData = (data)=>{
    // console.log('============Action=======>', data);
    
    return{
        type: 'SET_FLIGHT_FORM_DATA',
        payload: data
    }

}