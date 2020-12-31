import { StyleSheet } from 'react-native';

const COLOR_PRIMARY = 'blue';

export default StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15,
        marginBottom: 15,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#D1D1D1',
        backgroundColor: '#FFFFFF',
    },
    card_details: {
        flex: 1,
    },
    xs_card_details: {
        flex: 1,
        flexGrow: 1,
        flexShrink: 1,
        justifyContent: 'center',
    },
    card_heading: {
        flexDirection: 'row',
    },
    md_card_heading: {
    },
    sm_card_heading: {
        marginLeft: -6,
    },
    xs_card_heading: {
        marginLeft: -6,
        paddingTop: 2,
        paddingBottom: 2,
    },
    card_heading_text: {
        flex: 1,
        marginTop: 10.75,
        marginLeft: -8,
        paddingBottom: 14,
    },
    md_card_heading_text: {
        flexDirection: 'row',
    },
    mood_card_heading_text: {
        paddingRight: 4,
        paddingBottom: 9,
    },
    sm_card_heading_text: {
        marginTop: 18,
        paddingRight: 4,
        paddingBottom: 9,
        marginLeft: -4,
        marginRight: 9,
    },
    xs_card_heading_text: {
        flex: 1,
        flexBasis: 'auto',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: -3,
        marginTop: 9,
        marginBottom: 9,
        justifyContent: 'center',
    },

    card_title: {
        fontSize: 20,
        marginTop: 3,
        lineHeight: 20,
        fontWeight: '400',
        color: '#000000',
        textAlignVertical: 'top',
        fontFamily: "BarlowCondensed-SemiBold",
    },
    sm_card_title: {
        fontSize: 14,
        marginTop: -6,
        lineHeight: 14,
    },
    xs_card_title: {
        marginTop: 0,
        fontSize: 14,
        lineHeight: 14,
    },
    card_category: {
        fontSize: 12,
        lineHeight: 12,
        color: '#777777',
        marginTop: 0,
        fontWeight: '300',
        textAlignVertical: 'top',
        fontFamily: "Roboto-Light",
    },
    card_description: {
        marginLeft: 14,
        marginRight: 14,
        marginTop: -10,
        marginBottom: 7,
        color: '#000000',
        fontSize: 14,
        fontWeight: '300',
        fontFamily: 'Roboto-Light',
    },
    sm_card_description: {
        marginLeft: 10,
        marginTop: -5,
    },
    xs_card: {
        flex: 1,
        flexDirection: 'row',
    },
    xs_card_photo_view: {
        flex: 1,
        flexBasis: 87,
        flexGrow: 0,
        flexShrink: 0,
    },
    card_photo: {
        flex: 1,
    },
    md_card_photo: {
        height: 250,
    },
    card_icon: {
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    md_card_icon: {
        height: 40,
        width: 40,
        borderRadius: 20,
    },
    sm_card_icon: {
        height: 30,
        width: 30,
        borderRadius: 15,
    },
    xs_card_icon: {
        height: 30,
        width: 30,
        borderRadius: 15,
    },
    /**
     * Icon white border to overlap on image (moon)
     */
    card_icon_border: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    md_card_icon_border: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginTop: -6,
    },
    sm_card_icon_border: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    xs_card_icon_border: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    card_icon_moon: {
        backgroundColor: '#FFFFFF',
    },
    card_icon_no_moon: {
        backgroundColor: 'transparent',
    },
    md_card_series: {
        top: 14,
    },
    sm_card_series: {
        bottom: 14,
    },
    xs_card_series: {
        top: 11,
    },
    card_series: {
        flex: 1,
        position: 'absolute',
        left: -10,
        // height: 32,
        paddingLeft: 18,
        paddingTop: 5,
        paddingRight: 14,
        paddingBottom: 5,
        textAlign: 'right',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.5)',
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    card_series_label: {
        // opacity: 1,
        color: '#FFFFFF',
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '400',
        fontFamily: 'BarlowCondensed-SemiBold',
    },
    card_points: {
        flex: 1,
        position: 'absolute',
        top: 14,
        paddingLeft: 12,
        paddingRight: 12,
        height: 56,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 1000,
        borderColor: 'rgba(255,255,255,0.5)',
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    md_card_points: {
        right: 14,
    },
    sm_card_points: {
        top: 8,
        left: 8,
    },
    card_points_value: {
        marginTop: -6.25,
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: '400',
        fontFamily: 'BarlowCondensed-SemiBold',
    },
    card_points_label: {
        marginTop: -3.75,
        color: '#FFFFFF',
        fontSize: 9,
        lineHeight: 9,
        fontWeight: '300',
        textAlign: 'center',
        fontFamily: 'Roboto-Light',
    },
    card_footer: {
        marginRight: 14,
        marginBottom: 14,
        flexDirection: 'row',
        alignItems: 'center'
    },
    md_card_footer: {
        marginLeft: 14,
    },
    xs_card_footer: {
        marginRight: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sm_card_time: {
        marginLeft: 10,
        marginBottom: 10,
    },
    card_time: {
        fontSize: 10.5,
        fontFamily: 'Roboto-Light',
        textAlignVertical: 'bottom',
        color: 'rgb(119, 119, 119)',
    },
    md_card_time: {
        alignSelf: 'flex-end',
    },
    card_button_view: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    xs_card_button_view: {
        alignItems: 'center'
    },
    /**
     * Disabled button
     */
    card_lock_button: {
        width: 105.88,
        paddingTop: 7.45,
        paddingBottom: 8,
        paddingLeft: 11,
        paddingRight: 8,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#AAAAAA',
    },
    sm_card_lock_button: {
        width: 98.3,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 13,
        paddingRight: 13,
    },
    xs_card_lock_button: {
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#AAAAAA',
    },
    card_lock_button_icon: {
        color: '#AAAAAA',
        marginLeft: 20,
        fontSize: 20,
        lineHeight: 20,
        fontWeight: '400',
    },
    xs_card_lock_button_icon: {
        color: '#AAAAAA',
        fontSize: 16,
        lineHeight: 17,
    },
    card_lock_button_text: {
        color: '#AAAAAA',
        marginRight: 18,
        marginTop: 1.75,
        textAlign: 'left',
        fontSize: 12.5,
        lineHeight: 12.5,
        fontWeight: '400',
        fontFamily: 'BarlowCondensed-SemiBold',
    },
    sm_card_lock_button_text: {
        marginRight: 13,
        fontSize: 11,
        lineHeight: 12,
    },
    /**
     * Default button
     */
    card_button: {
        paddingLeft: 18,
        paddingTop: 9,
        paddingRight: 18,
        paddingBottom: 9,
        borderRadius: 7,
    },
    xs_card_button: {
        paddingLeft: 7,
        paddingTop: 7,
        paddingRight: 7,
        paddingBottom: 7,
    },
    card_button_icon: {
        color: "#FFFFFF",
        fontSize: 17,
        lineHeight: 17,
        fontWeight: '400',
    },
    xs_card_button_icon: {
        color: "#FFFFFF",
        fontSize: 16,
        lineHeight: 17,
        fontWeight: '400',
    },
    card_button_text: {
        marginTop: -1,
        textAlign: 'left',
        textAlignVertical: 'center',
        fontSize: 14,
        lineHeight: 17,
        marginLeft: 2,
        fontWeight: '400',
        color: "#FFFFFF",
        fontFamily: 'BarlowCondensed-SemiBold',
    },
    /**
     * Action dialog style
     */
    action_dialog_button_view: {
        borderTopWidth: 1,
        borderTopColor: '#dddddd',
    },
    action_dialog_content: {
        paddingLeft: 0,
        paddingRight: 0,
        paddingBottom: 0,
        backgroundColor: '#FFFFFF',
    },
    action_dialog_title: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 8,
        marginTop: 5,
        marginBottom: 5,
        textAlign: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        fontSize: 20,
        lineHeight: 28.5,
        fontWeight: '400',
        color: 'rgb(204, 204, 204)',
        fontFamily: 'BarlowCondensed-SemiBold',
    },
    action_dialog_button: {
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 17,
        paddingBottom: 17,
        alignContent: 'center',
        justifyContent: 'center',
    },
    action_separator: {
        backgroundColor: '#333333',
        height: 1,
    },
    /**
     * Action button style
     */
    action_button_text: {
        textAlign: 'center',
        fontSize: 16,
        marginLeft: 4,
        fontWeight: '300',
        fontFamily: 'Roboto-Light',
        color: '#777777',
    },
    action_button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },
    sm_action_button: {
        marginTop: 5,
        marginLeft: 10,
    },
    xs_action_button: {
        marginLeft: 6,
    },
    action_button_icon_view: {
        marginTop: -5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    action_button_icon: {
        fontSize: 18,
        lineHeight: 20,
        color: '#D1D1D1',
    },
    action_icon: {
        fontSize: 16,
        lineHeight: 16,
        fontWeight: '400',
        color: '#777777',
        alignSelf: 'center',
    },
    /**
     * Mood Card
     */
    mood_container: {
        flex: 1,
        zIndex: -1,
        paddingTop: 14,
        paddingLeft: 9,
        paddingRight: 9,
        paddingBottom: 14,
        flexDirection: 'row',
        backgroundColor: '#F4F4F4'
    },
    mood_input_option: {
        flex: 1,
        borderWidth: 1,
        borderColor: COLOR_PRIMARY,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 4,
        paddingRight: 12,
        paddingBottom: 8,
        paddingLeft: 12,
        paddingTop: 6,
        margin: 6,
        marginTop: 5,
        marginBottom: 6,
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
    },
    mood_input_text:
    {
        fontSize: 18.2,
        fontWeight: '400',
        color: COLOR_PRIMARY,
    },
    separator_upcoming: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 15,
        marginBottom: 15,
    },
    separator_line: {
        flex: 1,
        height: 1,
        color: 'rgb(51, 51, 51)',
        backgroundColor: 'rgb(187, 187, 187)',
    },
    separator_content: {
        flexDirection: 'row',
        paddingLeft: 13,
        paddingRight: 13,
        justifyContent: 'center',
        alignItems: 'center'
    },
    separator_icon: {
        color: 'rgb(119, 119, 119)',
        fontSize: 18,
    },
    separator_text: {
        marginLeft: 6,
        fontSize: 13,
        fontWeight: '300',
        color: 'rgb(0, 0, 0)',
        fontFamily: 'Roboto-Light',
    },
    separator_loading: {
        marginBottom: 25,
    },
    separator_noupdate_main_text: {
        fontSize: 24,
        color: '#777777',
        fontWeight: '400',
        fontFamily: 'BarlowCondensed-SemiBold',
    },
    separator_noupdate_sub_text: {
        fontSize: 13,
        lineHeight: 14,
        color: '#777777',
        fontWeight: '300',
        fontFamily: 'Roboto-Light',
    },
});
