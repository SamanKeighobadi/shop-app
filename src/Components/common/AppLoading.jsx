import React from 'react';
//? react spinners
import {ClipLoader} from 'react-spinners'
//? Semantic UI Component
import {Container} from 'semantic-ui-react'

const AppLoading = () => {
    return (
        <div>
            <Container textAlign='center' style={{marginTop:'3rem'}} >
                <ClipLoader size={80}  />
            </Container>
        </div>
    );
};

export default AppLoading;