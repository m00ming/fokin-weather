import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import PropTypes from 'prop-types';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {LinearGradient} from 'expo-linear-gradient'

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#00ECBC", "#007ADF"]
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"]
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#00C6FB", "#005BEA"]
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6ES"]
    },
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Atmosphere",
        subtitle: ""
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FEF253", "#FF7300"]
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"]
    },
};
export default function Weather({temp, condition}) {
    return (
        <LinearGradient 
            colors={weatherOptions[condition].gradient} 
            style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons 
                    size={96} 
                    name={weatherOptions[condition].iconName} 
                    color="white"
                />
                <Text style={styles.temp}>{temp}℃</Text>
            </View>
            <View style={styles.textContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{condition}</Text>
                    <Text style={styles.subtitle}>it's {condition} today😃</Text>
                </View>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm", 
        "Drizzle", 
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBotton: 10,
        textAlign: "left"
    },
    subtitle: {
        color: "white",
        fontSize: 24,
        fontWeight: "600",
        textAlign: "left"
    },
    textContainer: {
        flex: 1,
        paddingHorizontal: 40,
        justifyContent: "center",
        alignItems: "flex-start"
    }
});