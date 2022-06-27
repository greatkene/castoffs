import React from 'react';
import { View, Stylesheet } from 'react-native'
import styles from '../config/styles';

function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
    return (
        <View style={styles.container}>
            {imageUris.map((uri) => ( 
                <ImageInput 
                    imageUri={uri} 
                    key={uri} 
                    onChangeImage={() => onRemoveImage(uri)}
                />
            ))}
            <ImageInputList onChangeImage={(uri) => onAddImage(uri)}/>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    }
})

export default ImageInputList;