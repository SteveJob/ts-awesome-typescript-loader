/**
 * Created by Administrator on 2017/5/11.
 */
import * as React from 'react'
// import * as ReacttDom from 'react-dom'

export interface HelloProps{
    f: string,
    m: string
}

export class Hello extends React.Component<HelloProps, undefined> {
    render() {
        console.log(document.getElementById('add'))
        console.log("fghbiuawerghioqwerhgpwrghpiwreg")
        return <div>hello, f: {this.props.f}, m: {this.props.m}</div>
    }
}