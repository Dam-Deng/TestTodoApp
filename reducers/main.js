const {createStore, combineReducers} = Redux;
const {TodoAppContainer, reducers}= window.App;

const combineReducer = combineReducers(reducers);
const store = createStore(combineReducer);

ReactDOM.render(
    <TodoAppContainer/>,
    document.getElementById('app')
);