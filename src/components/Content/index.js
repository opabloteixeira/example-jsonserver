import React, { Component } from 'react';
import api from '../../service/api';
import './content.css'
import { FaEdit, FaDatabase } from 'react-icons/fa';



export default class Content extends Component {

    constructor(){
        super();
        this.state = {
            products: [],
            price: ''
        }
    }
    


    
    async componentDidMount(){
        const response = await api.get('products');
        this.setState({products: response.data});
    }





    render() {
        return (
            <div className="center">
                <table className="tg">
                    <tr className="first-line">
                        <th className="title-th">Estoque Físico na Fazenda</th>
                        <th className="title-th">Insumo</th>
                        <th className="title-th">Custo Unitário Médio na Safra</th>
                        <th className="title-th-icon"></th>
                    </tr>

                    {
                        this.state.products.map(item => (
                           
                            <tr>
                                <td className="balance">{`${item.balance.toLocaleString('pt-br', {minimumFractionDigits: 3})} ${item.unit} `} <FaDatabase color='#1b1b1b'/></td>
                                <td className="description">
                                    {` ${item.name} `} 

                                    <span className={item.type === `Outros` ? `type type-blue` :
                                                     item.type === `Inseticida` ? `type type-red` : `type`}> {item.type} </span> 

                                    <span className="formulation">
                                        {item.formulation  ?  item.formulation : ""}
                                    </span>
                                   
                                   <div className="wrap-manufactor">

                                        <span className="manufactor">
                                            {item.manufactor  ?  item.manufactor : ""}
                                        </span>

                                   </div>
                                </td>
                                <td className="price">USD 
                                    <input 
                                        defaultValue={item.price.toLocaleString('pt-br', {minimumFractionDigits: 2})} 
                                        onChangeText={(text) => this.setState({ price: text })}
                                        type='text' className='table-input'>
                                    </input>

                                   

                                    /{item.unit}
                                </td>
                                <td className="icon"><FaEdit/></td>
                            </tr>
                        ))
                    }
                    
                </table>
            </div>
        );
    }
}