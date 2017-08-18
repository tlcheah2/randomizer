/**
 * @flow
 */
import React from 'react'
import {
    StyleSheet,
    TouchableHighlight,
    Text
} from 'react-native'

const styles = StyleSheet.create({
    listItemContainer: {
        padding: 10,
    },
})


export default class ListItem extends React.PureComponent {

    constructor(props) {
        super(props);
        this._onItemPressed = this._onItemPressed.bind(this);
    }

    _onItemPressed() {
        this.props.onPressed && this.props.onPressed(this.props.id);
    }
    
    render() {
        const {content} = this.props;
        return (
            <TouchableHighlight  
                style={styles.listItemContainer}
                onPress={this._onItemPressed}>
                <Text>{content}</Text>
            </TouchableHighlight>
        )
    }
}

ListItem.propTypes = {
    id: React.PropTypes.number,
    content: React.PropTypes.string,
    onPressed: React.PropTypes.func
}