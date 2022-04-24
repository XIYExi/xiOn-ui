import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './styles/index.scss';

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import exp from "constants";
library.add(fas)

export {default as Alert} from './components/Alert/index';

export {default as Animator} from './components/Animator/index';

export {default as AutoComplete} from './components/AutoComplete/index';

export {default as Button} from './components/Button/index';

export {default as Carousel} from './components/Carousel/index';

export {CheckBox, CheckBoxGroup} from './components/CheckBox/index';

export {default as Divider} from './components/Divider/index';

export {Col, Row} from './components/Grid/index';

export {default as Icon} from './components/Icon/index';

export {default as Image} from './components/Image/index';

export {default as Input} from './components/Input/index';

export {default as InputNumber} from './components/InputNumber/index';

export {Layout, Header, Content, Footer, Sider} from './components/Layout/index';

export {default as Menu} from './components/Menu/index';

export {default as Message} from './components/Message/index';

export {default as Modal} from './components/Modal/index';

export {default as Progress} from './components/Progress/index';

export {Radio, RadioGroup} from './components/Radio/index';

export {default as Rate} from './components/Rate/index';

export {default as Space} from './components/Space/index';

export {default as Spin} from './components/Spin/index';

export {default as Statistic} from './components/Statistic/index';

export {default as Switch} from './components/Switch/index';

export {default as Table} from './components/Table/index';

export {default as Upload} from './components/Upload/index';

export {default as Zone} from './components/Zone/index';


ReactDOM.render(<App/>, document.getElementById('root'));


