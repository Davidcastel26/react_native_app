import { View, Text } from 'react-native'
import { useState } from 'react'

import { EthPrice, NFTTitle } from './SubInfo'
import { COLORS, SIZES, FONTS } from '../Constants'

const DetailsDes = ({ data }) => {

  const [text, setText] = useState(data.description.slice(0,100))
  const [readMore, setReadMore] = useState(false)

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

    <View style={{ marginVertical:SIZES.extraLarge * 1.5}}>
      <Text style={{ 
        fontSize: SIZES.font, 
        fontWeight:'600',
        color: COLORS.primary
        }}>
        Description
      </Text>
      <View style={{ marginTop: SIZES.base}}>
      <Text style={{ 
        fontSize: SIZES.small, 
        fontWeight:'400',
        color: COLORS.secondary,
        lineHeight: SIZES.large
        }}>
          {text}
        {!readMore && '...'}
        </Text>
      </View>
    </View>
   </>
  )
}

export default DetailsDes