/**
 * Created by Administrator on 2017/5/11.
 */
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Hello} from './components/Hello'

ReactDOM.render(<Hello f="23" m="eq"/>, document.getElementById('add') as HTMLElement)
