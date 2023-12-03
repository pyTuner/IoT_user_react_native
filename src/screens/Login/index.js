import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, Keyboard, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import { useNavigation, useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { scale } from 'react-native-size-matters';
import * as yup from 'yup';
import { Formik, Field } from 'formik';
import { doPost, loginUser } from '../../api/services/APIServices'
import { showSnackBar } from '../../utils/SnackBar';
import { connect } from 'react-redux';
import * as authActions from '../../store/actions/authActions';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_SIGNATURE } from '../../api/constants/APIConstants';


const signInValidationSchema = yup.object().shape({
  email_id: yup.string()
    .email('Please enter a valid email address')
    .required('Email is required!'),
  password: yup.string().required('Password is required!')

})

const Login = ({...props}) => {

  const {updateUserLogin, updateUserAccessToken, user, isLoggedIn} = props;
  const navigation = useNavigation();
  const [showSpinner, setShowSpinner] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const { colors: { background, text, lightGray5, card, secondary }, dark } = useTheme();


  useEffect(() => {

  }, []);

  return (
    <View style={styles(background).loginMain}>
      <ScrollView showsHorizontalScrollIndicator={false} >
        <View style={styles().headerContainer}>
          <View style={styles().companyLogoContainer}>
            <Image
              source={dark ? require('../../assets/Elliot_Logo_light.png') : require('../../assets/Elliot_Logo_Dark.png')}
              style={{ width: 70, height: 70, resizeMode: 'contain' }}
            />
          </View>
          <View style={styles().welcomeNoteContainer}>
            <Text style={styles(background, text).welcomeText}>
              Welcome
            </Text>
            <Text style={styles(background, text, lightGray5).signInText}>
              To Industry 4.0
            </Text>
          </View>

        </View>

        <View style={styles().formContainer}>
          <Formik
            validationSchema={signInValidationSchema}
            initialValues={{ email_id: '', password: '' }}
            onSubmit={async (values) => {
              setShowSpinner(true);
              try {
                const res = await doPost(API_SIGNATURE.LOGIN ,values);
                console.log(res.data.success);
                const success = res.data.success;
            
                if (success) {
                  setShowSpinner(false);
                  navigation.navigate('Home');
                  updateUserLogin(res.data, true);
                  updateUserAccessToken(res.data.token);
            
                  // Use AsyncStorage.setItem inside try block
                  await AsyncStorage.setItem('token', res.data.token);
                  showSnackBar(res.msg);
            
                  // console.log('user from state: ', user);          
                  // console.log('isLoggedIn status: ', isLoggedIn);             
                } else {
                  setShowSpinner(false);
                  navigation.navigate('LogIn');
                  showSnackBar(res.msg, 'ERROR');
                }
              } catch (err) {
                console.log(err);
                setShowSpinner(false);
                showSnackBar('Something went wrong', 'ERROR');
              }
            }}>
            {({ handleSubmit, isValid, values, errors, handleChange, touched }) => (
              <>
                <View style={styles().inputContainer}>
                  <View style={styles().wrapper}>
                    <TextInput
                      style={styles(background, text, lightGray5).input}
                      placeholder='Enter Email'
                      keyboardType='email-address'
                      name='email_id'
                      onChangeText={handleChange('email_id')}
                    />
                    {
                      (errors.email_id && touched.email_id) &&
                      <Text style={{ fontSize: 10, color: 'red', marginTop: scale(5) }}>
                        {errors.email_id}
                      </Text>
                    }
                  </View>

                  <View style={styles().wrapper}>
                    <View style={styles(background, text, lightGray5).input} >

                      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                       <View>
                          <TextInput
                            style={{ height: scale(50), color: text, width:'93%' }}
                            placeholder='Enter Password'
                            secureTextEntry={showPassword}
                            name='password'
                            onChangeText={handleChange('password')}
                          />
                           
                          {
                            (errors.password && touched.password) &&
                            <Text style={{ fontSize: 10, color: 'red', marginTop: scale(5) }}>
                              {errors.password}
                            </Text>
                          }
                        </View>
                        <TouchableOpacity
                          onPress={() => setShowPassword(prevState => !prevState)}
                          style={{ alignSelf: 'center' }}>
                          <Icon name={showPassword ? 'eye-off-outline' : 'eye-outline'} size={20} color={text} />
                        </TouchableOpacity>
                      </View>

                    </View>
                  </View>

                  <View style={styles().forgetPasswordContainer} >
                    <TouchableOpacity>
                      <Text style={styles().forgetPasswordText} >
                        Forgot Password
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles().btnContainer}>
                  <TouchableOpacity
                    onPress={handleSubmit}
                    style={{
                      backgroundColor: dark ? card : secondary,
                      height: scale(50),
                      borderRadius: scale(50),
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Text style={{ color: '#fff', marginLeft: scale(5) }}>
                      Login
                    </Text>
                    {showSpinner && (<ActivityIndicator color='#fff' />)}
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </View>
  )
}

Login.propTypes = {
  user: PropTypes.object.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  updateUserLogin: PropTypes.func.isRequired,
  updateUserAccessToken: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    isLoggedIn: state.auth.isLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateUserLogin: (user, isLoggedIn) => dispatch(authActions.updateUserLogin(user, isLoggedIn)),
  updateUserAccessToken: (token) => dispatch(authActions.updateUserAccessToken(token)),
})
export default connect(mapStateToProps, mapDispatchToProps) (Login)