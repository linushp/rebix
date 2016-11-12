import createActions from './createActions';
import createComponent from './createComponent';
import createStore from './createStore';
import createConfigure from './createConfigure';
import Provider from './component/Provider';

var Reubibi = {
    createActions: createActions,
    createComponent: createComponent,
    createStore: createStore,
    createConfigure: createConfigure,
    Provider: Provider
};


module.exports = Reubibi;
//export default Reubibi;
