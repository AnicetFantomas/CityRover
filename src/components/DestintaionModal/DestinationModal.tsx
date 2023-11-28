import React from 'react'
import { Modal } from 'react-native'
import { Container } from './DestiniationModal.styles'
import RoundButton from '../RoundButton/RoundButton';

interface DestinationModalProps {
    visible: boolean;
}

const DestinationModal = ({visible} : DestinationModalProps) => {
    
  return (
    <Modal visible={visible} animationType="fade">
        <Container>
            <RoundButton icon='arrow-back-outline' onPress={() => console.log('back')} />
        </Container>
    </Modal>
  )
}

export default DestinationModal
