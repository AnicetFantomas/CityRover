import React from "react";
import { Modal } from "react-native";
import { StyledFlatlist } from "./DestiniationModal.styles";
import RoundButton from "../RoundButton/RoundButton";
import FlatListHeader from "./conponents/FlatListHeader";

interface DestinationModalProps {
  visible: boolean;
  closeModal: () => void;
}

const DestinationModal = ({ visible, closeModal }: DestinationModalProps) => {
  const handleRoundButtonPress = () => {
    closeModal();
  };

  const renderFlatListItem = () => {
    return null;
  };

  return (
    <Modal onRequestClose={closeModal} visible={visible} animationType="fade">
      <StyledFlatlist
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={renderFlatListItem }
        ListHeaderComponent={FlatListHeader}
      />
      <RoundButton icon="arrow-back-outline" onPress={handleRoundButtonPress} />
    </Modal>
  );
};

export default DestinationModal;
