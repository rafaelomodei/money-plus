import { createContext, useEffect, useState, ReactNode, useContext } from 'react';
import { api } from '../services/api';

interface Transaction{
    id: number;
    title: string;
    type: string;
    amount: number;
    category: string;
    createdAt: string;
};

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsProviderPros{
    children: ReactNode;
}

interface TransactionsContexData{
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContexData>(
    {} as TransactionsContexData
);

export function TransactionsProvider({ children }: TransactionsProviderPros){

    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(()=>{
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions));    
    },[]);

    async function createTransaction(transactionInput: TransactionInput){
       const response = await api.post('/transactions', {
           ...transactionInput,
           createdAt: new Date(),
       });
       const { transaction } = response.data;

       setTransactions([
        ...transactions,
        transaction,
       ]);
    }

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            { children }
        </TransactionsContext.Provider>
    );
}

export function useTransactions(){
    const cotext = useContext(TransactionsContext);

    return cotext;
}