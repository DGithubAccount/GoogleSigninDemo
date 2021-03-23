import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
GoogleSignin.configure({
  webClientId:
    '267379024243-rjt4im2ruli94c0sf7tp7s7cpougt3fm.apps.googleusercontent.com',
  iosClientId:
    '267379024243-ahtshn2r6qdts1t7fk2eioq3u2fcgmo3.apps.googleusercontent.com',
  offline: true,
});
export default class App extends Component {
  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      // this.setState({ userInfo });
      console.log('userinfo -- ', userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('eror -- ', error.code);
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log('eror -- ', error.code);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log('eror -- ', error.code);
      } else {
        // some other error happened
        console.log('eror -- ', error.code);
      }
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <GoogleSigninButton
          style={{width: 192, height: 48}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={this.signIn}
        />
        {/* {this.state.loaded ? <Text> success </Text> : <Text> fail </Text>} */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
