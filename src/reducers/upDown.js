

const initialState = 0;

const ChangeNum = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT" : return state + 4;
        case "DECREMENT" : return state - 4;
        default: return state;
    }
}
export default ChangeNum;