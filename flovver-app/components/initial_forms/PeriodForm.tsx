import React, { useState, useEffect } from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {DARK_BLUE, PINK} from '../../styles/colors'
import Next from './Shared/Next'
import ChooseDateButton from './Shared/ChooseDateButton'
import { getDate } from '../shared/SharedMethods'

const PeriodForm = ({history, periodStart, onSubmit}) => {

    const [show, setShow] = useState(false)

    const onChange = (event, selectedDate) => {
        setShow(false)
        const currentDate = selectedDate  || periodStart;
        onSubmit(currentDate);
    };

    return (
        <React.Fragment>
            <Text style={styles.title} >When did your last {"\n"} period start?</Text>
            <View>
                <ChooseDateButton 
                    onPress={()=>{setShow(true)}}
                />
                <Text style={{textAlign:'center', marginTop:10}} >{getDate(periodStart)}</Text>
            </View>
            {show &&
               <DateTimePicker 
                value={periodStart}
                onChange = {onChange}
                style={{backgroundColor:PINK}}
               />
            }
            <Next onPress={()=>{history.push("/InitialForm/Duration")}} />
            
        </React.Fragment>
    )

}

const styles = StyleSheet.create({

   title:{
       fontSize:40,
       textAlign:"center",
       fontFamily:"lato-black",
       color:DARK_BLUE
   }

})


export default PeriodForm