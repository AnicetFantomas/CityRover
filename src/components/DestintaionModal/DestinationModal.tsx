import React from 'react'
import { Modal } from 'react-native'
import { Container } from './DestiniationModal.styles'
import RoundButton from '../RoundButton/RoundButton';

interface DestinationModalProps {
    visible: boolean;
    closeModal: () => void 
}

const DestinationModal = ({visible, closeModal} : DestinationModalProps) => {

    const handleRoundButtonPress = () => {
        closeModal()
    }
    
  return (
    <Modal visible={visible} animationType="fade">
        <Container>
            <RoundButton icon='arrow-back-outline' onPress={handleRoundButtonPress} />
        </Container>
    </Modal>
  )
}

export default DestinationModal
