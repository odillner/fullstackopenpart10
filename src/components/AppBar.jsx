import React from "react";
import {View, StyleSheet, TouchableOpacity} from "react-native";
import Constants from "expo-constants";
import Text from "./Text";

import theme from "../theme";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.header,
        height: 70,
        justifyContent: "space-between",
        flexDirection: "row"
    },
    tab: {
        padding: 20,
    }
});

const Tab = ({title, link}) => {
    return (
        <View style={styles.tab}>
            <Link to={link} component={TouchableOpacity}>
                <Text fontSize="subheading" color="tertiary">{title}</Text>
            </Link>
        </View>

    );
};

const AppBar = () => {
    return (
        <View style={styles.container}>
            <Tab title="Repositories" link="/"/>
            <Tab title="Sign In" link="/signin"/>
        </View>
    );
};

export default AppBar;