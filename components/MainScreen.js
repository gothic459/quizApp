import React from 'react';
import { Text, View, FlatList, StyleSheet,SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';


const DATA = [
    {
      id: '1',
        number: '1',
    },
    {
      id: '2',
        number: '2',
    },
    {
      id: '3',
        number: '3',
    },
    {
        id: '4',
        number: '4',
    },
    {
        id: '5',
        number: '5',
    },
    {
        id: '6',
        number: '6',
    }

  ];

const Item = ({ number }) => (
    <View style={styles.drawer}>
        <Text style={{fontSize:30}}> Test no. {number}</Text>
        {/* insert lorem ipsum into text:  */}
        <Text>
            Aliquip minim deserunt excepteur mollit deserunt est elit. Laborum ex nisi ipsum tempor voluptate et nisi commodo excepteur enim. Lorem tempor Lorem aliqua pariatur eu occaecat laborum laboris duis sunt magna laborum incididunt. Exercitation commodo deserunt nisi Lorem dolor dolore. Ad reprehenderit magna nostrud dolore do non proident est esse occaecat irure incididunt. Cillum laborum sit ad enim consectetur velit aliquip mollit aute fugiat.
       </Text>
    </View>
);




const FloatingButton = () => {

        return(
            <TouchableOpacity style={styles.showResults} >
                <Ionicons name="md-add" size={32} color="white" />
            </TouchableOpacity>
            
        )
    


}



export default function MainScreen(params) {

    const renderItem = ({ item }) => (
        <Item number={item.number} />
    );

   


    return(
        <>
            <SafeAreaView style={styles.container}>
                <FlatList 
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    
                    /> 
                <FloatingButton/>
            </SafeAreaView>
        </>

    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
    },

    drawer:{
        flex: 0.5,
        borderColor: 'black',
        borderWidth: 1,
        margin: 10,
        padding: 10,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
  
    },
    showResults:{
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: 'green',
        borderRadius: 50,
        padding: 10,
        paddingHorizontal: 20,
        paddingVertical:20
        

    }
  });