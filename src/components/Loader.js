import { View, Text, Modal, ActivityIndicator } from 'react-native'
import React from 'react'
import { Colors } from '../assets/style'
import { colors } from '../assets/Styles'

const Loader = ({ visible }) => {
    return (
        <Modal visible={visible} transparent >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size='large' color={colors.primary} />
            </View>
        </Modal>
    )
}

export default Loader