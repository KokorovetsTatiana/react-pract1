import React from "react";
import Sidebar from '../Sidebar/Sidebar';
import Main from "../Main/Main";
import Paper from '../Paper/Paper';
import { Container } from './Wrapper.styles';

export default function Wrapper() {
    return (
    <Container>
        <Sidebar></Sidebar>
            <Main>
                <Paper gap={32}>
                    <button>Click me!</button>
                </Paper>
        </Main>
    </Container>
    )
}