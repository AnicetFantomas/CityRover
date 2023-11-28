import { useState } from "react";

export const useDestinationModal = () => {
    const [destinationInputText, setDestinationInputText] = useState('');

    const handleDestinationInputTextChange = (value: string) => {
        setDestinationInputText(value);
    };
  return {
    models: {destinationInputText},
    operations: {handleDestinationInputTextChange},
  }
}
