import React from 'react';
import shallowEqual from '../utils/shallowEqual'


export function shallowCompare(component, nextProps, nextState) {
    return !shallowEqual(component.props, nextProps) || !shallowEqual(component.state, nextState);
}

/**
 * React组件基础类, 浅层检查props和state是否更改, 未更改则不重新渲染
 * 注意: 在不使用immutable.js作为数据源格式时, 请确保浅层检查不会阻止渲染!
 */
export default class PureRenderComponent extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        var isOk =  shallowCompare(this, nextProps, nextState);
        //console.log('shallowCompare',isOk)
        return isOk;
    }

}
