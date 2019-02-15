const API_CALL_REQUEST = "API_CALL_REQUEST";
const API_CALL_SUCCESS = "API_CALL_SUCCESS";
const API_CALL_FAILURE = "API_CALL_FAILURE";

const initialState = {
    fetching: false,
    info:null,
    error:null
}
const reudcerInfo = (state = initialState, action) => {
    switch (action.type) {
        case API_CALL_REQUEST:
            return {...state,fetching:true,error:null} // goi request thì fetchinh sẽ chạy
        case API_CALL_SUCCESS:
            return {...state,fetching:false,info:action.info} // nếu call thành công => ngừng fetching và hiện thông tin 
        case API_CALL_FAILURE:
            return {...state,fetching:false,error:action.error} // thất bại thì hiện lỗi 
        default:
            return state
    }
}
export default reudcerInfo;
