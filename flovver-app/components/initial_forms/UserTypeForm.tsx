import React, { useContext } from 'react'

import { View, Dimensions, Text, StyleSheet } from 'react-native'

import BackArrow from './Shared/BackArrow'
import ScrollPicker from './Shared/ScrollPicker'
import Next from './Shared/Next'
import { UserContext } from '../../store/UserContext'

import * as COLORS from '../../styles/colors'

import * as actions from '../../store/actions'

const UserTypeForm = ({ onSubmit, value, history }) => {
    
    const [state, dispatcher] = useContext(UserContext) 

    const onBack = ()=> {
        dispatcher(actions.setSignIn(false))
        dispatcher(actions.setToken(null))
        dispatcher(actions.setUser(null))
        dispatcher(actions.setSharedUsers([]))
        history.push("/Login")
    }

    return(
    <>
        <View 
            style={{marginTop:10, alignSelf:"stretch"}}
        >
            <BackArrow onPress={()=>{ onBack() }} />
            <Text style={styles.title}>What type of user will {"\n"} you be?</Text>
        </View>
        <ScrollPicker 
                items={["regular", "view only"]}
                onSubmit={onSubmit}
                value={value}
        />
        <View>
            <Text style={styles.informationText}>Regular users will be able to edit and{"\n"}
                view their calendar. View-only users{"\n"} 
                will not be able to edit calendars.</Text>
            <Next onPress={()=>{history.push("/InitialForm/Period")}} />
        </View> 
    </>)
}

export default UserTypeForm

const styles = StyleSheet.create({

    title:{
        fontSize:35,
        textAlign:"center",
        
        color:COLORS.DARK_BLUE,
        marginTop:10,
        fontFamily:"lato-black"
    },
    informationText:{
        textAlign:"center",
        fontSize:12,
        marginBottom:10,
        color: COLORS.LIGHT_GREY,
        
    },
    backArrow:{
        height:20,
        width:20,
        marginLeft: Dimensions.get('window').width * -0.1
    }
 
})