import React from 'react';
import {Form, Button} from 'native-base';
import {Field, reduxForm} from 'redux-form';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {renderInput, ScreenOutlineButton, TransButton} from '../../components';

const styles = StyleSheet.create({
  viewDsplay: {
    flexDirection: 'row',
    marginTop: 30,
  },
});

const LoginForm = props => {
  const {
    handleSubmit,
    onLogin,
    userLogin: {isLoading, error},
  } = props;

  const submitForm = values => {
    console.log('TCL: values', values);
    onLogin(values);
  };
  return (
    <Form>
      <Field
        name="email"
        component={renderInput}
        label="Email  or Surname"
        icon="mail"
        isWhite
      />
      <Field
        name="password"
        component={renderInput}
        label="Password"
        icon="lock"
        secure
        isWhite
      />

      <View style={styles.viewDsplay}>
        <TransButton
          name="Login"
          onBtnPress={() => handleSubmit(submitForm.bind(this))}
          isLoading={isLoading}
        />
        {/* <Button>
          <Text>Login</Text>
        </Button> */}
      </View>
    </Form>
  );
};

const validate = values => {
  const error = {};
  // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!values.email) {
    error.email = 'Email Address is required';
  }
  if (!values.password) {
    error.password = 'Password is required';
  }
  return error;
};

export default reduxForm({
  form: 'login',
  validate,
})(LoginForm);
