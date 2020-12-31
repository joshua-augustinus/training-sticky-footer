import React from 'react';
import styles from './FeedRow.style.js';
import { Text, View } from 'react-native';
import { FavouriteIcon } from './icon/FavouriteIcon';

const FavouritesSeperator = () => {

    return (
        <View style={{ flex: 1, marginBottom: 15 }}>
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




