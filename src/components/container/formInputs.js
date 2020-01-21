import React from 'react';
import {
  Item,
  Input,
  Label,
  Button,
  Text,
  CheckBox,
  Icon,
  Spinner,
  Picker,
  DatePicker,
  Radio,
  Grid,
  Col,
} from 'native-base';
import {StyleSheet, View, TouchableOpacity, Platform} from 'react-native';

const styles = StyleSheet.create({
  button: {
    color: '#FFF',
    margin: 'auto',
    backgroundColor: '#12a39f',
    flex: 4,
    elevation: 5,
  },
  buttonOutline: {
    margin: 'auto',
    backgroundColor: 'transparent',
    borderColor: '#12a39f',
    borderWidth: 1,
    flex: 4,
  },
  buttonText: {
    color: '#FFF',
    width: '100%',
    textAlign: 'center',
    fontSize: 20,
  },
  buttonOutlineText: {
    color: '#12a39f',
    width: '100%',
    textAlign: 'center',
    fontSize: 20,
  },
  checkBoxView: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 20,
  },
  watuchckb: {
    flex: 1,
  },
  watuchckbText: {
    marginLeft: 20,
    width: '100%',
    color: '#FFF',
    fontWeight: '500',
  },
  watuchckbTextWht: {
    marginLeft: 20,
    width: 200,
    color: 'black',
    fontWeight: '500',
  },
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: '#FFF',
    fontWeight: '500',
  },
  labelwht: {
    color: 'black',
    fontWeight: '500',
  },
  inputwht: {
    color: '#12b1a2',
    fontWeight: '500',
    borderBottomColor: '#FFF',
  },
  error: {
    marginLeft: 15,
    color: 'red',
  },
  info: {
    marginLeft: 15,
    fontSize: 12,
    color: '#FFF',
  },
  infowht: {
    marginLeft: 15,
    fontSize: 12,
    color: 'black',
  },
});

export const renderInput = ({
  infoMsg,
  input,
  label,
  iseditable,
  numeric,
  type,
  secure,
  icon,
  isWhite,
  meta: {touched, error, warning},
}) => {
  return (
    <View>
      <Item floatingLabel>
        <Label style={isWhite ? styles.labelwht : styles.label}>{label}</Label>
        <Input
          autoFocus={true}
          keyboardType={numeric ? 'numeric' : 'default'}
          secureTextEntry={secure}
          {...input}
          style={isWhite ? styles.inputwht : styles.label}
        />
      </Item>
      {infoMsg && (
        <Text style={isWhite ? styles.infowht : styles.info}>{infoMsg}</Text>
      )}
      <Text style={styles.error}>{touched ? error : ''}</Text>
    </View>
  );
};

export const TransButton = ({name, onBtnPress, isLoading}) => {
  return (
    <Button
      disabled={isLoading}
      rounded
      style={styles.button}
      onPress={onBtnPress()}>
      {!isLoading && <Text style={styles.buttonText}>{name}</Text>}
      {isLoading && (
        <View style={styles.spinnerStyle}>
          <Spinner style={{paddingTop: 25}} color="white" />
        </View>
      )}
    </Button>
  );
};

export const ScreenOutlineButton = ({name, onBtnPress, isLoading}) => {
  return (
    <Button
      disabled={isLoading}
      rounded
      style={styles.buttonOutline}
      onPress={() => onBtnPress()}>
      {!isLoading && <Text style={styles.buttonOutlineText}>{name}</Text>}
      {isLoading && (
        <View style={styles.spinnerStyle}>
          <Spinner style={{paddingTop: 25}} color="#12b1a2" />
        </View>
      )}
    </Button>
  );
};
