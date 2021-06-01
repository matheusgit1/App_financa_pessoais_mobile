import React from 'react';
//import RNPickerSelect from 'react-native-picker-select';
import {Picker as RNPickerSelect } from '@react-native-picker/picker';
import { PickerView } from './styles';

export default function Picker({ onChange , tipo}){
    return(
        <PickerView>
            <RNPickerSelect
            style={{
               width: '100%',
            }}
    
            onValueChange={ (valor) => onChange(valor) }
            selectedValue={tipo}
            >
               <RNPickerSelect.Item label="Receita" value="receita"/>
               <RNPickerSelect.Item label="Despesa" value="despesa"/>
            </RNPickerSelect>
        </PickerView>
    )
}