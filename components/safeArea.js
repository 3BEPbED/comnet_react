import React from 'react';
import { View ,StyleSheet,Text} from 'react-native';
export default function SafeArea({children}) {

    return(
        <View style={styles.SafeArea}>
        </View>
    )
}
const styles = StyleSheet.create({
   SafeArea:{
       marginTop:20
   }

  });