import {takeLatest,call,put} from 'redux-saga/effects';
import axios from 'axios';
// - takeLastest() : có nghĩa là nếu chúng ta thực hiện một loạt các actions, 
//nó sẽ chỉ thực thi và trả lại kết quả của của actions cuối cùng.
// -put() : dispatch một action.
// - call(): gọi function. Nếu nó return về một promise, tạm dừng saga cho đến khi promise được giải quyết.

 
function fetchInfo(){ // function that makes the api request and returns a Promise for response
    return axios.get('https://nba-players.herokuapp.com/players-stats/');
    // .then((info)=>{
    //     console.log(info);
    // })
    // .catch((err)=>{
    //     console.log(err);
    // })
    // return axios({
    //     method: "get",
    //     url: "https://nba-players.herokuapp.com/players-stats/"
    //   });
}
function* workerSaga(){
    try {
        const response = yield call(fetchInfo); // gọi đến fetchInfo(có api chứa json)
        const info = response.data; // lấy thông tin         
        yield put({type:"API_CALL_SUCCESS",info}); // dispatch acction success
    } catch (error) {
        yield put({ type: "API_CALL_FAILURE", error });

    }
}
export function* watcherSaga(){
    yield takeLatest("API_CALL_REQUEST",workerSaga);
}

