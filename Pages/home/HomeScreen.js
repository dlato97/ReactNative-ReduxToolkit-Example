import React from 'react';
import {Button, SafeAreaView, StatusBar} from 'react-native';
import {useDispatch} from 'react-redux';
import {addProduct, deleteProduct} from './store/homeStore';

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Button
          title="ADD"
          onPress={() => dispatch(addProduct({id: 1, name: 'pippo'}))}
        />
        <Button title="DELETE" onPress={() => dispatch(deleteProduct(1))} />
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
