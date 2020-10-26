import React from "react";
import {View, StyleSheet} from "react-native";
import Constants from "expo-constants";
import Text from "./Text";

import theme from "../theme";

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.header
    },
    tab: {
    }
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <Text color="textSecondary">Repositories</Text>
        </View>
    );
};

export default AppBar;