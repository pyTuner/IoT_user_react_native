import { Dimensions } from "react-native"
import EStyleSheet from "react-native-extended-stylesheet"
import { moderateScale } from "react-native-size-matters"

export const styles = (background, text, lightGray5) =>
    EStyleSheet.create({
        loginMain: {
            flex: 1,
            backgroundColor: background,
            paddingLeft: moderateScale(20),
            paddingRight: moderateScale(20),

        },
        headerContainer: {
            height: Dimensions.get('window').height / 4,
            justifyContent: 'center',
        },
        companyLogoContainer: {
            marginBottom: moderateScale(10)
        },
        welcomeNoteContainer: {
            // flex:1,
            marginTop: moderateScale(20),
            marginBottom: moderateScale(20),
            // flexDirection: 'row',
            // alignItems: 'flex-end',
        },
        welcomeText: {
            fontSize: moderateScale(30),
            fontWeight: 'bold',
            color: text,
          
        },
        signInText: {
            color: '#EF7F1A',
            fontSize: moderateScale(15),
            letterSpacing: 0.5,
            fontWeight: 'bold',
     
        },
        formContainer: {

        },
        inputContainer: {

        },
        wrapper: {
            marginTop: moderateScale(30)
        },
        input: {
            height: moderateScale(55),
            color: text,
            borderWidth: moderateScale(1),
            borderColor: lightGray5,
            borderRadius: moderateScale(8),
            paddingHorizontal: moderateScale(10),
            fontWeight: 'bold',

        },
        forgetPasswordContainer: {
            alignItems: 'flex-end',
        },
        forgetPasswordText: {
            fontSize: moderateScale(12),
        },
        btnContainer: {
            marginTop: '10%'
        }
    })
