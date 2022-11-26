import { TextField } from '@mui/material';
import { Container } from '@mui/system';
import React, { Component } from 'react';


export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Container style={{ margin: '20px' }}>
                <TextField id="standard-basic" label="Search" variant="standard" onChange={this.props.handleSearchInputChange} />
            </Container>
        )
    }
}
