import { Platform } from 'react-native'

const theme = {
    colors: {
        primary: '#0366d6',
        secondary: '#586069',
        backgroundColor: '#24292e',
        surface: '#ffffff',
        text: '#24292e',
        textSecondary: '#d3dee8',
    },
    fontSizes: {
        body: 14,
        subheading: 16,
    },
    fonts: {
        main: Platform.select({
            android: 'Roboto',
            ios: 'Arial',
        }),
    },
    fontWeights: {
        normal: '400',
        bold: '700',
    },
}

export default theme
