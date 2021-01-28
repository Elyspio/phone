import * as React from 'react';
import {StyleSheet} from 'react-native';

import {Text, View} from '../components/common/Themed';
import {StoreState} from "../../store";
import {connect, ConnectedProps} from "react-redux";
import {Dispatch} from "redux";
import {add} from "../../store/example";

export function TabOneScreen(props: ReduxTypes) {

    React.useEffect(() =>{

        setInterval(() => {
            props.add(Math.floor(Math.random() * 100))
        }, 100)

    }, [])


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tab One</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
            <Text>{props.val}</Text>
        </View>
    );
}


const mapStateToProps = (state: StoreState) => ({
    val: state.example.value
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    add: (x:number) =>  dispatch(add(x))
})

const connector = connect(mapStateToProps, mapDispatchToProps);
type ReduxTypes = ConnectedProps<typeof connector>;


export default connector(TabOneScreen)

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
