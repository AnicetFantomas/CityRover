import { Square } from './../components/RoundButton/RoundButton.styles';
const pallete = {
    white: '#fff',
    black: '#000',
}

export const colors = {
    common: {
        background: pallete.white,
        shadowDefault: pallete.black,
    },
    components: {
        mapSearchBar: {
            squareColor: pallete.black,
        }
    }
};

export type Colors = typeof colors;