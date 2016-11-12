import {Component,PropTypes, Children } from 'react'
import storeShape from '../utils/storeShape'


export default class Provider extends Component {
    getChildContext() {
        return {store: this.store}
    }

    constructor(props, context) {
        super(props, context)
        this.store = props.store
    }

    render() {
        const { children } = this.props;
        return Children.only(children);
    }
}


Provider.propTypes = {
    store: storeShape.isRequired,
    children: PropTypes.element.isRequired
};
Provider.childContextTypes = {
    store: storeShape.isRequired
};
