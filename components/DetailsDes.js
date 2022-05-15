import { View, Text } from 'react-native'
import { useState } from 'react'

import { EthPrice, NFTTitle } from './SubInfo'
import { COLORS, SIZES, FONTS } from '../Constants'

const DetailsDes = ({ data }) => {
  return (
   <>
    <View style={{
      width:'100%',
      flexDirection:'row',
      justifyContent: 'space-between',
      alignItems:'center',
      
    }}>
      <NFTTitle 
        title={data.name}
        subTitle={data.creator}
        titleSize={SIZES.extraLarge}
        subTitleSize={SIZES.font}
      />
      <EthPrice price={data.price}/>
    </View>
   </>
  )
}

export default DetailsDes