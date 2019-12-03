import React, { Component } from 'react';

import Logo from '../../assets/farmbox-logo.svg';
import './header.css'
import { FaCog, FaUser } from 'react-icons/fa';


export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="center">
                    <section>
                        <div className="logo-operation">
                            <a href="/"><img src={Logo} alt="logo"></img></a>
                            <span className="operation">Operação</span>
                        </div>

                        <div className="nav-link">
                            <nav>
                                <ul>
                                    <li><a href='/'>Mapa</a></li>
                                    <li><a href='/'>Agenda</a></li>
                                    <li><a href='/'>Monitoramentos</a></li>
                                    <li><a href='/'>Aplicações</a></li>
                                    <li><a href='/'>Insumos</a></li>
                                    <li><a href='/'>Pluviometria</a></li>
                                    <li><a href='/'>Semeadura</a></li>
                                </ul>
                            </nav>

                            <div className="icons">
                                <a href='/'><FaCog color="#a7aaac" size={19}/></a>
                                <a href='/'><FaUser color="#a7aaac" size={19}/></a>
                          
                            </div>
                        </div>
                        
                    </section>
                </div>
            </header>
        );
    }
}