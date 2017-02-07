import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

   render() {
     return (
       <Card>
          <CardSection>
            <Input
              label="Email"
              placeholder="your@email.com"
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
          </CardSection>

          <CardSection>
            <Input
              label="Password"
              placeholder="password"
              secureTextEntry
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
          </CardSection>

          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
              Log In
            </Button>
          </CardSection>

       </Card>
     );
   }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error } = auth;

  return { email, password, error };
};

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default connect(mapStateToProps,
  { emailChanged, passwordChanged, loginUser })(LoginForm);
