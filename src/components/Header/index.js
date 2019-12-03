import React, { Component } from 'react';
// import api from '../../service/api';

import Logo from '../../assets/farmbox-logo.svg';


export default class Header extends Component {
    render() {
        // const {report} = this.props;
        return (
            <header>
                <section>
                    <div className="logo-operation">
                        <img src={Logo}></img>

                        <span className="operation">Operação</span>

                    </div>
                    
                </section>
            </header>
        );
    }
}