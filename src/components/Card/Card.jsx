import React from 'react';
import Paper from '../Paper/Paper';
import { Image, OrganizationType, Name, Actions } from './Card.styles';
import data from '../../data/university.json';
import { HiPencilAlt, HiTrash } from 'react-icons/hi';
import PropTypes from 'prop-types';

function Card() {
    const { name } = data;
    return (
        <Paper gap={ 32}>
            <Image src="./images/logo.png" alt="Logo" />
            <OrganizationType>университет</OrganizationType>
            <Name>{ name}</Name>
            <Actions>
                <HiPencilAlt size={16} />
                <HiTrash size={16} />
            </Actions>
        </Paper>
    )
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
}

export default Card
