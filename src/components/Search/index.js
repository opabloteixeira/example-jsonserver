import React, { Component } from 'react';
// import api from '../../service/api';

import '../../styles/search.css'

import { FaPlus } from 'react-icons/fa';



export default class Search extends Component {
    render() {
        // const {report} = this.props;
        return (
            <div className="center">
                <div className="search">
                    <div className="title-left">
                        Insumos
                    </div>

                    <div className="search-btns">
                        <div className="search-righ">
                            <select className="select-one">
                                <option>Fazenda 1</option>
                                <option>Fazenda 2</option>
                                <option>Fazenda 3</option>
                            </select>
                            
                            <select className="select-two">
                                <option>2019</option>
                                <option>2018</option>
                                <option>2017</option>
                            </select>
                        </div>
                        <div className="btns-right">
                            <button type="button" className="btn-1">
                                <FaPlus size={13}/>
                                <span>Adicionar vários</span>
                            </button>
                            <button type="button" className="btn-2">
                                <FaPlus size={13}/>
                                <span>Adicionar</span>
                            </button>
                            <button type="button" className="btn-3">
                                Inventário
                            </button>
                            <button type="button" className="btn-4">
                                Exportar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
