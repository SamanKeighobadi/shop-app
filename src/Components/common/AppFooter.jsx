import React from 'react';
import {Container,Item} from 'semantic-ui-react'

const AppFooter = () => {
    return (
        <Container >
            <Item.Group>
                <Item>
                    <Item.Content>
                        <Item.Header content="Item" as='li' />
                    </Item.Content>
                </Item>
            </Item.Group>
        </Container>
    );
};

export default AppFooter;