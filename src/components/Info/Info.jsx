import React from 'react';
import { Container } from './Info.styles';
import Card from '../Card/Card';
import Paper from '../Paper/Paper';
import data from '../../data/university.json';

function Info() {
    return (
        <Container>
            <Card name={data.name} />
            <Paper>{ data.description}</Paper>
        </Container>
    )
}

export default Info
