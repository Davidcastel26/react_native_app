import { useState} from 'react'
import { Text, View, SafeAreaView, FlatList } from 'react-native'

import { COLORS, MFTData } from '../Constants'
import { NFTCard, HomeHeader, FocusedStatusBar } from '../components'

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <FocusedStatusBar background={COLORS.primary} />
    </SafeAreaView>
  )
}

export default Home