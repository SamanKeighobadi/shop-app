import React,{useState} from 'react';
import {Modal,Header,Icon,Button} from 'semantic-ui-react'
import ProductCardButton from './ProductCardButton';

const ModalComponent = () => {

    const [open,setOpne] = useState(false)

    return (
        <div>
            <Modal
                basic
                onClose={() => setOpne(false)}
                onOpen={() => setOpne(true)}
                size={'tiny'}
                open={open}
                trigger={<ProductCardButton />}
             >
                 <Header icon>
                     <Icon name='check circle' />
                     Successfuly added to you cart
                 </Header>
                 <Modal.Content>
                    <p>
                        The Product Successfuly Added to your cart
                    </p>
                 </Modal.Content>
                 <Modal.Actions>
                     <Button color="green" size='tiny' onClick={() => setOpne(false)}>
                        Ok
                     </Button>
                 </Modal.Actions>
             </Modal>
        </div>
    );
};

export default ModalComponent;