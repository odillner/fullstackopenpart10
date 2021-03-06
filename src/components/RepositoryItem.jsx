import React from "react";
import {StyleSheet, View, Image} from "react-native";

import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.repositoryItem,
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 10,
    },
    header: {
        flexDirection: "row",
    },
    headerText: {
        paddingLeft: 10,
        paddingBottom: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 10,
    },
    counters: {
        flexDirection: "row",
        paddingLeft: 10,
    },
    singleCounter: {
        paddingLeft: 30,
        textAlign: 'center',
    },
    language: {
        marginTop: 5,
        borderRadius: 5,
        padding: 3,
        backgroundColor: theme.colors.primary,
        alignSelf: "baseline",
    }
});

const ItemHeader = ({item}) => {
    return (
        <View style={styles.header}>
            <Image
                style={styles.avatar}
                source={item.ownerAvatarUrl}
            />
            <View style={styles.headerText}>
                <Text fontWeight="bold">
                    {item.fullName}
                </Text>
                <Text color="secondary">
                    {item.description}
                </Text>
                <Language language={item.language}/>
            </View>

        </View>
    );
};


const SingleCounter = ({title, value}) => {
    let newVal = value;

    /* formats number into k format if necessary */
    if (newVal >= 1000) {
        const k = Math.floor(newVal/1000);
        const rest = Math.round((newVal - k*1000)/100)/10;

        newVal = k + rest;
        newVal += "k";
    }

    return (
        <View style={styles.singleCounter}>
            <Text fontWeight="bold">
                {newVal}
            </Text>
            <Text color="secondary">
                {title}
            </Text>
        </View>
    );
};

const Counters = ({item}) => {
    return (
        <View style={styles.counters}>
            <SingleCounter title="Stars" value={item.stargazersCount}/>
            <SingleCounter title="Forks" value={item.forksCount}/>
            <SingleCounter title="Reviews" value={item.reviewCount}/>
            <SingleCounter title="Rating" value={item.ratingAverage}/>
        </View>
    );
};

const Language = ({language}) => {
    return (
        <View style={styles.language}>
            <Text color="tertiary">
                {language}
            </Text>
        </View>
    );
};


const RepositoryItem = ({item}) => {
    return (
        <View style={styles.container}>
            <ItemHeader item={item}/>
            <Counters item={item}/>
        </View>
    );
};

export default RepositoryItem;