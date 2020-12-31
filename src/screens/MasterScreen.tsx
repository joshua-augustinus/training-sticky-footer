import React, { useEffect, useState } from 'react';
import { Alert, Animated, EdgeInsetsPropType, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { SafeAreaView, StackActions } from 'react-navigation';
import { DrawerActions, NavigationDrawerProp } from 'react-navigation-drawer';
import { ScrollView } from 'react-native-gesture-handler';
import { FavouritesSeperator } from '@src/components/FavouritesSeperator';

/**
 * https://reactnavigation.org/docs/4.x/typescript
 */
type Props = {
    navigation: NavigationDrawerProp<{ userId: string, routeName: string }>;
}

const data = [];
for (let i = 0; i < 20; i++) {
    if (i === 10) {
        data.push({ index: i, type: 'seperator' });

    } else {
        data.push({ index: i });

    }
}

const MasterScreen = (props: Props) => {
    const windowHeight = useWindowDimensions().height;
    const [favouritesLayout, setFavouritesLayout] = useState(null);
    const [containerLayout, setContainerLayout] = useState(null);

    useEffect(() => {

    }, []);

    const onMenuPress = () => {
        console.log(props.navigation.state);// { key: 'Home', routeName: 'Home' }
        console.log("Menu pressed");
        props.navigation.dispatch(DrawerActions.toggleDrawer());
    }

    const scrollY = React.useRef(new Animated.Value(0)).current;

    const onFavouritesLayout = (ev: any) => {
        console.log('layout', ev.nativeEvent.layout.y);
        if (ev.nativeEvent.layout.y > 0)
            setFavouritesLayout(ev.nativeEvent.layout);
    }

    const topEdge = favouritesLayout?.y - containerLayout?.height + favouritesLayout?.height;

    let translateY; let transform;
    if (favouritesLayout && containerLayout) {
        console.log("topedge", topEdge);
        translateY = scrollY.interpolate({
            inputRange: [-1, 0, topEdge - 1, topEdge, topEdge + 1],
            outputRange: [0, 0, 0, 0, -1]
        })
        transform = [{ translateY: translateY }]
    }


    const onContainerLayout = (ev: any) => {
        if (ev.nativeEvent.layout.y > 0) {
            console.log("Container layout", ev.nativeEvent.layout)
            setContainerLayout(ev.nativeEvent.layout);

        }
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ height: 50, backgroundColor: 'red', flexDirection: 'row', alignItems: 'center' }} >

                <TouchableOpacity style={{ backgroundColor: 'yellow' }}
                    onPress={() => onMenuPress()}>
                    <Text>Menu</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onLayout={onContainerLayout}>
                <Animated.ScrollView
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                        { useNativeDriver: true }
                    )}
                    style={{ width: '100%' }}>
                    {data.map((item) => {
                        if (item.type === 'seperator') {
                            return <FavouritesSeperator key={item.index} onLayout={onFavouritesLayout} />
                        } else {
                            return <Text key={item.index} style={{ height: 100, margin: 10, backgroundColor: 'pink' }}>Placeholder</Text>

                        }
                    })}
                </Animated.ScrollView>
                {transform &&
                    <Animated.View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, transform: transform, backgroundColor: 'green' }}>
                        <FavouritesSeperator onLayout={onFavouritesLayout} />
                    </Animated.View>
                }

            </View>
        </SafeAreaView>

    );

}

MasterScreen.navigationOptions = {}

export { MasterScreen }