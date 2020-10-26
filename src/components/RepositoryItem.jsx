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
        paddingLeft: 20,
        paddingBottom: 10,
        paddingTop: 5,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 10,
    },
    counters: {
        flexDirection: "row",
        paddingLeft: 40,
    },
    singleCounter: {
        paddingLeft: 30,
    },
    language: {
        marginTop: 10,
        borderRadius: 5,
        padding: 3,
        backgroundColor: theme.colors.primary,
        width: "100%",
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
                <Text color="textSecondary">
                    {item.description}
                </Text>
            </View>
            <Language language={item.language}/>

        </View>
    );
};


const SingleCounter = ({title, value}) => {
    return (
        <View style={styles.singleCounter}>
            <Text fontWeight="bold">
                {value}
            </Text>
            <Text color="textSecondary">
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
            <Text>
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