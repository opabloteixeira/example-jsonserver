import React, { Component } from 'react';
// import api from '../../service/api';

import Logo from '../../assets/farmbox-logo.svg';
import '../../styles/header.css'
import { FaCog, FaUser } from 'react-icons/fa';


export default class Header extends Component {
    render() {
        // const {report} = this.props;
        return (
            <header>
                <div className="center">
                    <section>
                        <div className="logo-operation">
                            <img src={Logo}></img>
                            <span className="operation">Operação</span>
                        </div>

                        <div className="nav-link">
                            <nav>
                                <ul>
                                    <li><a href='#'>Mapa</a></li>
                                    <li><a href='#'>Agenda</a></li>
                                    <li><a href='#'>Monitoramentos</a></li>
                                    <li><a href='#'>Aplicações</a></li>
                                    <li><a href='#'>Insumos</a></li>
                                    <li><a href='#'>Pluviometria</a></li>
                                    <li><a href='#'>Semeadura</a></li>
                                </ul>
                            </nav>

                            <div className="icons">
                                <FaCog color="#a7aaac" size={19}/>
                                <FaUser color="#a7aaac" size={19}/>
                            </div>
                        </div>
                        
                    </section>
                </div>
            </header>
        );
    }
}