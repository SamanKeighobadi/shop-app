import React from 'react';
import {ClipLoader} from 'react-spinners'
import {Container} from 'semantic-ui-react'

const AppLoading = () => {
    return (
        <div>
            <Container textAlign='center' >
                <ClipLoader size={80}  />
            </Container>
        </div>
    );
};

export default AppLoading;