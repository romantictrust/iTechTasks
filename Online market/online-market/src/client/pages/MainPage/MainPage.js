import React, { PureComponent } from 'react'
import Header from '../../basicComponents/components/Header';
import Dashboard from './components/Dashboard';

export default class MainPage extends PureComponent {
    render() {
        return (
            <div>
                <Header/>
                <Dashboard/>
            </div>
        )
    }
}
