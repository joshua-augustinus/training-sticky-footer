import React from 'react';
import styles from './FeedRow.style.js';
import { Text, View } from 'react-native';
import { FavouriteIcon } from './icon/FavouriteIcon';

interface Props {
    onLayout: (ev: any) => void
}
const FavouritesSeperator = (props: Props) => {



    return (
        <View style={{ backgroundColor: 'white' }} onLayout={props.onLayout}>
            <View style={styles.separator_upcoming}>
                <View style={styles.separator_line} />
                <View style={styles.separator_content}>
                    <FavouriteIcon />
                    <Text allowFontScaling={false} style={styles.separator_text}>FAVOURITES</Text>
                </View>
                <View style={styles.separator_line} />
            </View>

        </View>
    )
}

export { FavouritesSeperator }




