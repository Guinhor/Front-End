import React from 'react';

const ProductTable = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div>
                <h2>Tabela de Produtos</h2>
                <table>
                    <thead>
                        <tr>
                            <th style={{ backgroundColor: '#4CAF50', color: 'white' }}>ID</th>
                            <th style={{ backgroundColor: '#4CAF50', color: 'white' }}>Nome</th>
                            <th style={{ backgroundColor: '#4CAF50', color: 'white' }}>Preço</th>
                            <th style={{ backgroundColor: '#4CAF50', color: 'white' }}>Estoque (kg)</th>
                            <th style={{ backgroundColor: '#4CAF50', color: 'white', textAlign: 'center' }}>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Produto A</td>
                            <td>R$ 50,00</td>
                            <td>20</td>
                            <td className="actions">
                                <button>Editar</button>
                                <button>Excluir</button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Produto B</td>
                            <td>R$ 35,00</td>
                            <td>20</td>
                            <td className="actions">
                                <button>Editar</button>
                                <button>Excluir</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductTable;
