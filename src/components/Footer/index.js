import React, { Component } from 'react';
 import './footer.css'



export default class Header extends Component {
    render() {
        return (
            <footer>
                <div className="center">
                    <section>
                        <span>© Farmbox 2019</span>
                        <span>CheckPlant Sistemas de Rastreabilidade LTDA</span>
                        <span>53 30255782 - farmbox@checkplant.com.br</span>
                    </section>
                </div>
            </footer>
        );
    }
}