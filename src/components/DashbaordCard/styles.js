import EStyleSheet from "react-native-extended-stylesheet";
import { moderateScale, scale } from "react-native-size-matters";

export const styles = () =>
    EStyleSheet.create({
        card: {
            backgroundColor:'#fff',
            height: moderateScale(105),
            width: moderateScale(335),
            // shadowColor: 'black',
            // shadowOffset: {
            //     height: 0,
            //     width: 2
            // },
            // shadowOpacity: 0.25,
            // shadowRadius: 3.84,
            elevation: 3,
            margin: scale(2),
            // justifyContent:'center',
            // alignItems: 'center',
            // color: text,
            // borderWidth: moderateScale(1),
            // borderColor: 'red',
            // borderRadius: moderateScale(8),
            // paddingHorizontal: moderateScale(10),
            fontWeight: 'bold',
            flexDirection: 'row',
         
        },
        containerIcon: {
            backgroundColor:'#E6E6E6',
            height: '88%',
            width: '28%',
            // borderColor: '#000',
            // borderWidth: moderateScale(1),
            margin:'2%',
            justifyContent: 'center',
            alignItems: 'center',
    



        },
        containerMain: {
            // backgroundColor:'blue',
            height: moderateScale('88%'),
            width: '64%',
            alignItems: 'start',
            // borderColor: '#000',
            // borderWidth: moderateScale(1),
            flexDirection: 'row',
            margin:'2%',

        },
        subContainerA: {
            // backgroundColor:'cyan',
            height: moderateScale('50%'),
            width: '65%',
            alignItems: 'starts',
            // borderColor: '#000',
            // borderWidth: moderateScale(1),

        },
        subContainerA_DeviceName: {
            // backgroundColor:'green',
            height: '30%',
            // width: moderateScale(234),
            marginTop: '7%',
            alignItems: 'start',
            justifyContent: 'center',

            // borderColor: '#000',
            // borderWidth: moderateScale(1),
        },
        subContainerA_DeviceCount: {
            // backgroundColor:'purple',
            display: 'flex',
            height: '50%',
            // width: moderateScale(234),
            // marginTop:'%',
            alignItems: 'center',
            justifyContent: 'center',
            // borderColor: '#000',
            // borderWidth: moderateScale(1),
        },
        subContainerB: {
            // backgroundColor:'yellow',
            height: moderateScale('50'),
            width: '35%',
            // alignItems:'start',
            // justifyContent: 'space-between',
            // borderColor: '#000',
            // borderWidth: moderateScale(1),

        },
        subContainerB_Active: {
            // backgroundColor:'red',
            // height: moderateScale(105),
            // width: moderateScale(234),
            justifyContent: 'space-between',
            alignItems: 'start',
            // borderColor: '#000',
            // borderWidth: moderateScale(1),
            flexDirection: 'row',
            marginTop: '25%',

        },
        textActive: {

        },
        textActiveCount: {
            textAlign: 'right', 
            marginRight:'10%' 
        }

    })


