import { Text, View, SafeAreaView, Image, StatusBar, FlatList } from 'react-native'

import {COLORS, SIZES, SHADOWS, FONTS, assets} from '../Constants'
import { CircleButton, RectButton, SubInfo, FocusedStatusBar, DetailsDes, DetailsBid} from '../components'

const Details = ({ route, navigation}) => {
  
  // console.log(route);
  const { data } = route.params;

  return (
    <SafeAreaView style={{flex: 1}} >
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        transLucent={true}
      >
        <View>
          <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark}/>
        </View>
      </FocusedStatusBar>
    </SafeAreaView>
  )
}

export default Details