import { View, Text, Image, TextInput } from 'react-native'
import { COLORS, FONTS, SIZES, assets } from '../Constants'

const HomeHeader = ({ onSearch }) => {
  return (
    <View>
      <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
      }}>
         <Image 
          source={assets.logo}
          resizeMode="contain"
          style={{ width: 90, height: 25}}
         />
         <View style={{width: 45, height: 45}}>
          <Image
            source={assets.person01}
            resizeMode="contain"
            style={{width:'100%', height:'100%'}}
          />
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{width:15, height:15, position:'absolute', bottom:0, right:0 }}
          />
         </View>
      </View>
      <View 
        style={{ marginVertical: SIZES.font}}
      >
        <Text
          style={{fontWeight:'400', fontSize: SIZES.small, color: COLORS.white}}
        >
          Hello Dave 👋
        </Text>
        <Text
          style={{fontWeight:'700', fontSize: SIZES.large, marginTop:SIZES.base / 2, color: COLORS.white}}
        >
          Let's find a masterpiece
        </Text>
      </View>
      <View style={{marginTop: SIZES.font}}>
        <View style={{
            width:"100%", 
            borderRadius: SIZES.font, 
            backgroundColor: COLORS.gray,
            flexDirection:'row',
            alignItems:'center', 
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2
          }}
        >
          <Image 
            source={assets.search}
            resizeMode="contain"
            style={{width:20, height: 20, marginRight: SIZES.base}}
          />
          <TextInput 
            placeholder="Search NFTs"
            style={{flex: 1}}
            onChangeText={ onSearch }
          />
        </View>
      </View>
    </View>
  )
}

export default HomeHeader