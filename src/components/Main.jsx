import React from "react";
import Constants from "expo-constants";
import {StyleSheet, View} from "react-native";
import RepositoryList from "./RepositoryList";
import {Route, Switch, Redirect} from "react-router-native";

import AppBar from "./AppBar";

import theme from "../theme";

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: theme.colors.backGround
    },
});

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar></AppBar>
            <Switch>
                <Route path="/" exact>
                    <RepositoryList />
                </Route>
                <Redirect to="/" />
            </Switch>
        </View>
    );
};

export default Main;