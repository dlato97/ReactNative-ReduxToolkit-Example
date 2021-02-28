import React from 'react';
import {Button, SafeAreaView, StatusBar} from 'react-native';
import {useDispatch} from 'react-redux';
import {addProduct, deleteProduct} from './store/homeStore';
import {addItem, deleteItem} from '../feature1/store/actions/feature1Actions';

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Button
          title="ADD HOME REDUCER"
          onPress={() => dispatch(addProduct({id: 1, name: 'pippo'}))}
        />
        <Button
          title="DELETE HOME REDUCER"
          onPress={() => dispatch(deleteProduct(1))}
        />
        <Button
          title="ADD FEATURE1 REDUCER"
          onPress={() => dispatch(addItem({id: 2, name: 'pluto'}))}
        />
        <Button
          title="DELETE FEATURE1 REDUCER"
          onPress={() => dispatch(deleteItem(2))}
        />
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
