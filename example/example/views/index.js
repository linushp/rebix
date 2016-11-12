import React from 'react';
import ReactDOM from 'react-dom';
import RebixConfigure from '../config/RebixConfigure';
import Rebix,{Provider} from 'react-rebix';
import Hello from './hello';

var store = RebixConfigure.getStore();

console.log(store);
ReactDOM.render(
    <Provider store={store}>
        <Hello></Hello>
    </Provider>,
    document.getElementById('root')
);