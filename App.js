import React, { useState, useEffect } from 'react'
import { Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'

import ImageInput from './app/components/ImageInput';
import Screen from './app/components/Screen';
import ImageInputList from './app/components/ImageInputList';


export default function App() {
  const [imageUris, setImageUris] = useState([]);

  const handleAdd = uri => {
    setImageUris([...imageUris, uri])
  }

  return (
    <Screen>
      <ImageInputList
        onAddImage={handleAdd}
        imageUri={imageUris} 
      />
    </Screen>
  );
}

