import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {login} from '../../store/actions';
import LoginForm from '../../components/accountForms/loginForm';
import {View} from 'native-base';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainView: {
    padding: 40,
  },
});
const LoginScreen = props => {
  return (
    <View style={styles.mainView}>
      <LoginForm {...props} />
    </View>
  );
};

const mapStateToProps = state => {
  console.log('TCL: mapStateToProps -> state', state);
  return {
    userLogin: state.accountsReducer.accountLogin,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: bindActionCreators(login, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen);
