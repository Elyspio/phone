import * as React from 'react';
import {StyleSheet} from 'react-native';

import {Text, View} from '../components/common/Themed';
import {connect, ConnectedProps} from "react-redux";
import {StoreState} from "../../store";
import {Dispatch} from "redux";

export function StoreScreen(props: ReduxTypes) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Store</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
            <Text>{JSON.stringify(props.store)}</Text>
        </View>
    );
}


const mapStateToProps = (state: StoreState) => ({store: state})

const mapDispatchToProps = (dispatch: Dispatch) => ({})

const connector = connect(mapStateToProps, mapDispatchToProps);
type ReduxTypes = ConnectedProps<typeof connector>;

export default connector(StoreScreen)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
