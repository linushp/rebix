import Rebix from 'react-rebix';
import RebixConfigure from './RebixConfigure';

export default function createRebixComponent(BaseComponentImpl, componentConfig) {
    return Rebix.createComponent(RebixConfigure, BaseComponentImpl, componentConfig);
}