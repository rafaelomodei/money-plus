import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import App from './App';

createServer({

  models:{
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Primeira transição',
          type: 'deposit',
          category: 'Manual',
          amount: 0,
          createdAt: new Date('2021-07-28 23:32:00'),
        }
      ]
    })
  },

  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return this.schema.create('transaction', data);
    });
  } 
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);