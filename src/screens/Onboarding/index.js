import { View, Text, Image } from 'react-native'
import React from 'react'
import AppIntroSlider from 'react-native-app-intro-slider';
import Ion from 'react-native-vector-icons/dist/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles'
import { connect } from 'react-redux';
import * as authAction from '../../store/actions/authActions';
import PropTypes from "prop-types";

const Onboarding = ({...props}) => {

    const { updateOnboarding } = props;
    const navigation = useNavigation();
    const slides = [
        {
            key: 'slide1',
            title: 'Welcome.\nINDUSTRY 4.0',
            text: 'Industry 4.0 is a disruptive technology of networked devices,\n digitally connected that share data to create powerful information that helps reduce costs,\n increase efficiency and productivity. \n This technology is massively scalable.',
            image: require('../../assets/onboarding/industry40.jpg'),
            //   backgroundColor: '#59b2ab',
        },
        {
            key: 'slide2',
            title: 'Make it simplify',
            text: 'Our IoT based Machine Monitoring & Analytics (MMA) solution monitors and provides deep insightful analytics of factory floor production efficiency.',
            image: require('../../assets/onboarding/Bulb_hand.jpg'),
            //   backgroundColor: '#febe29',
        },
        {
            key: 'slide3',
            title: 'Monitoring technology from anywhere!',
            text: 'We provide end-to-end Energy Management Solutions \n including  monitoring and analytics to optimize energy consumption and reduce costs.',
            image: require('../../assets/onboarding/mobile_Coffee.jpg'),
            backgroundColor: '#22bcb5',
        }
    ];

    const _renderItem = ({ item }) => {
        return (
            <View style={ styles().slide }>
                <View style={ styles().titleContainer }>
                    <Text style={ styles().title }>
                        { item.title }
                    </Text>
                </View>
                <View style={ styles().imageContainer }>
                    <Image source={ item.image } style={ styles().image }/>
                </View>
                <View style={ styles().textContainer }>
                    <Text style={ styles().text }>
                        { item.text }
                    </Text>
                </View>
            </View>
        )
    }   

    const _renderNextButton = () => {
        return (
            <View style={ styles().buttonCircle }>
                <Ion name='arrow-forward-outline' color='rgba(255,255,255, .9)' size={24} />
            </View>
        )
    }

    const _renderDoneButton = () => {
        return (
            <View style={ styles().buttonCircle }>
                <Ion name='checkmark' color='rgba(255,255,255, .9)' size={24} />
            </View>
        )
    }

    const _renderSkipButton = () => {
        return (
            <View style={ styles().skipView }>
                <Text style={ styles().skipTextColor } >Skip</Text>
            </View>
        )
    }

    const _onEndReached = () => {
        updateOnboarding(true);
        navigation.navigate('LogIn');
    }

    return (
        <AppIntroSlider
            data={slides}
            renderItem={_renderItem}
            renderDoneButton={_renderDoneButton}
            renderNextButton={_renderNextButton}
            renderSkipButton={_renderSkipButton}
            onDone={_onEndReached}
            onSkip={_onEndReached}
            dotClickEnabled={true}
            showNextButton={true}
            showDoneButton={true}
            showSkipButton={true}
        />
    )
}

// validate the prop types
// in this case, data from prop is coming from store i.e. authActions.js, authReducer.js
Onboarding.propTypes = {
    isOnboardingDisabled: PropTypes.bool.isRequired,
    updateOnboarding:PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        isOnboardingDisabled: state.auth.isOnboardingDisabled
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateOnboarding: (status) => dispatch(authAction.updateOnboarding(status)),
});

export default connect(mapStateToProps, mapDispatchToProps) (Onboarding);  