import { useState } from 'react';
import Modal from 'react-modal';
import logoImg from '../../assets/logo.svg';

import { Container, Contente } from './styles';

interface HeaderProps{
    onOpenNewtransactionModal: ()=> void;
}

export function Header({ onOpenNewtransactionModal }: HeaderProps) {

    return (
        <Container>
            <Contente>
                <img src={logoImg} alt="money plus" />
                <button type="button" onClick={onOpenNewtransactionModal}>
                    Nova transação
                </button>
            </Contente>
        </Container>
    );
}