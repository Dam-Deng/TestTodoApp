const {createStore, combineReducers, applyMiddleware} = Redux;
const {TodoAppContainer, reducers}= window.App;
const {Provider} = ReactRedux;


const thunkMiddleware = ({dispatch, getState}) => {
    return (next) => (action) => {
        if (typeof action == 'function') {
            return action(dispatch, getState);
        }
        next(action);
    }
};

const combineReducer = combineReducers(reducers);
const store = createStore(combineReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <TodoAppContainer/>
    </Provider>,
    document.getElementById('app')
);