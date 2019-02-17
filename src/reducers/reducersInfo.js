const API_CALL_SUCCESS = "API_CALL_SUCCESS";
const infoInitialState = null;
const InfoReducer = (state = infoInitialState, action) => {
    switch (action.type) {
        case API_CALL_SUCCESS:
            return action.info
        default:
            return state
    }
}
export default InfoReducer;