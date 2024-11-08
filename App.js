// ####################### Exercise 1 #########################
// import React from 'react';
// import { Text, View } from 'react-native';
//
// const exercise1 = () => {
//   return (
//       <View>
//       <Text style={{fontSize:24}}>
//         RP Values
//       </Text>
//         <Text style={{color:'green'}}>Excellence</Text>
//         <Text style={{backgroundColor:'yellow'}}>Customer Centric</Text>
//         <Text style={{fontStyle:'italic'}}>Integrity</Text>
//         <Text style={{textAlign:'center'}}>Teamwork</Text>
//         <Text style={{backgroundColor:'black', color:'white'}}>Enterprising</Text>
//       </View>
//   );
// };
//
// export default exercise1;

// ####################### Exercise 2 ##############
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
//
// const style = StyleSheet.create({
//   greenBox: {
//     width: 100,
//     height: 100,
//     marginTop:30,
//     backgroundColor: 'green',
//     borderRadius:1,
//     borderColor:'black'
//   },
//
//   boxText:{
//     textAlign: 'center',
//     color: 'white'
//   },
//
//   title:{
//     fontWeight: 'bold'
//   }
// })
//
// const exercise2 = () => {
//   return(
//       <View style={{marginTop:50}}>
//         <View style = {style.greenBox}>
//           <Text style = {[style.boxText, style.title]}>
//             Who We Are
//           </Text>
//         </View>
//
//         <View style={style.greenBox}>
//           <Text style = {style.boxText}>
//             Our People
//           </Text>
//         </View>
//
//         <View style={style.greenBox}>
//           <Text style = {style.boxText}>
//             Our Campus
//           </Text>
//         </View>
//
//       </View>
//   );
// };
//
// export default exercise2;

// ####################### Exercise 3A ##############
// import React from 'react';
// import {StyleSheet, Text, View} from "react-native";
//
// const styles = StyleSheet.create({
//   Parent: {
//     flexDirection:'row',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth:5
//   },
//
//   Child:{
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24
//   }
// })
//
// const MyApp = () => {
//   return (
//       <View style={styles.Parent}>
//         <View style={[styles.Child, { backgroundColor: 'powderblue' }]}>
//           <Text>Child 1</Text>
//         </View>
//         <View style={[styles.Child, { backgroundColor: 'skyblue' }]}>
//           <Text>Child 2</Text>
//         </View>
//         <View style={[styles.Child, { backgroundColor: 'steelblue' }]}>
//           <Text>Child 3</Text>
//         </View>
//       </View>
//   );
// };
//
// export default MyApp;

// ******************** Exercise 3B ***********************
// import React from 'react';
// import {StyleSheet, Text, View} from "react-native";
//
// const styles = StyleSheet.create({
//   Parent: {
//     flexDirection:'column',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth:5,
//     flex:1
//   },
//
//   Child:{
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24,
//     flex: 1
//   }
// })
//
// const MyApp = () => {
//   return (
//       <View style={styles.Parent}>
//         <Text style={[styles.Child, {backgroundColor:'powderblue'}]}>
//           Child 1
//         </Text>
//         <Text style={[styles.Child, {backgroundColor:'skyblue'}]}>
//           Child 2
//         </Text>
//         <Text style={[styles.Child, {backgroundColor:'steelblue'}]}>
//           Child 3
//         </Text>
//       </View>
//   );
// };
//
// export default MyApp;

// ******************* Exercise 3C ********************
// import React from 'react';
// import {StyleSheet, Text, View} from "react-native";
//
// const styles = StyleSheet.create({
//   Parent: {
//     flexDirection:'column',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth:5,
//     flex:1
//   },
//
//   Child:{
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24,
//     flex: 1,
//   }
// })
//
// const MyApp = () => {
//   return (
//       <View style={styles.Parent}>
//         <Text style={[styles.Child, {backgroundColor:'powderblue', width:90}]}>
//           Child 1
//         </Text>
//         <Text style={[styles.Child, {backgroundColor:'skyblue'}]}>
//           Child 2
//         </Text>
//         <Text style={[styles.Child, {backgroundColor:'steelblue', maxHeight:120}]}>
//           Child 3
//         </Text>
//       </View>
//   );
// };
//
// export default MyApp;

// ******************* Exercise 3D *****************
// import React from 'react';
// import {StyleSheet, Text, View} from "react-native";
//
// const styles = StyleSheet.create({
//   Parent: {
//     flexDirection:'row',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth:5
//   },
//
//   Child:{
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24,
//     flex: 1
//   }
// })
//
// const MyApp = () => {
//   return (
//       <View style={styles.Parent}>
//         <Text style={[styles.Child, {backgroundColor:'powderblue', flex:1/6}]}>
//           Child 1
//         </Text>
//         <Text style={[styles.Child, {backgroundColor:'skyblue', flex: 2/6}]}>
//           Child 2
//         </Text>
//         <Text style={[styles.Child, {backgroundColor:'steelblue', flex:3/6}]}>
//           Child 3
//         </Text>
//       </View>
//   );
// };
// export default MyApp;

// ******************* Exercise 3E *****************
// import React from 'react';
// import {StyleSheet, Text, View} from "react-native";
//
// const styles = StyleSheet.create({
//   Parent: {
//     flexDirection:'column',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth:5,
//     flex: 1,
//     // justifyContent: 'flex-start',
//     // justifyContent:'flex-end',
//     justifyContent:'space-evenly'
//   },
//
//   Child:{
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24,
//   }
// })
//
// const MyApp = () => {
//   return (
//       <View style={styles.Parent}>
//         <Text style={[styles.Child, {backgroundColor:'powderblue'}]}>
//           Child 1
//         </Text>
//         <Text style={[styles.Child, {backgroundColor:'skyblue'}]}>
//           Child 2
//         </Text>
//         <Text style={[styles.Child, {backgroundColor:'steelblue'}]}>
//           Child 3
//         </Text>
//       </View>
//   );
// };
//
// export default MyApp;

// ******************* Exercise 4 ******************
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
//
// const styles = StyleSheet.create({
//   Parent: {
//     backgroundColor: 'whitesmoke',
//     marginTop: 30,
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-around'
//   },
//
//   Child: {
//     width: 80,
//     height: 80,
//     alignItems: 'center',
//     textAlign: 'center',
//     textAlignVertical: 'center
//   },
//
// });
//
// const App = () => {
//   return (
//       <View style={styles.Parent}>
//         <View style={[styles.Child, { backgroundColor: 'skyblue' }]}>
//           <Text style={styles.Text}>Square 1</Text>
//         </View>
//
//         <View style={[styles.Child, { backgroundColor: 'limegreen' }]}>
//           <Text style={styles.Text}>Square 2</Text>
//         </View>
//
//         <View style={[styles.Child, { backgroundColor: 'crimson' }]}>
//           <Text style={styles.Text}>Square 3</Text>
//         </View>
//       </View>
//   );
// };
//
//
//
// export default App;

// ******************* Exercise 5 ********************
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'skyblue',
        padding: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
        textAlign: 'center',
        marginBottom: 20,
    },
    boatCard: {
        flexDirection: 'row',
        borderRadius: 10,
        marginBottom: 10,
        padding: 10,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    boatName: {
        fontSize: 10,
        fontWeight: 'bold',
        color: 'black'
    },
    description: {
        fontSize: 14,
        color: 'black',
    },
});

const Boat = ({ name, description, image }) => {
    return (
        <View style={styles.boatCard}>
            <Image source={image} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.boatName}>{name}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    );
};

const BoatsApp = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Boat Collection</Text>

            <Boat
                name="Bayliner"
                description="Super fast boaty"
                image={require('./img/bayliner.jpg')}
            />
            <Boat
                name="Princess"
                description="Luxurious and comfortable"
                image={require('./img/princess.jpg')}
            />
            <Boat
                name="Sea Ray"
                description="The ultimate experience at sea"
                image={require('./img/sea_ray.jpg')}
            />
        </ScrollView>
    );
};

export default BoatsApp;

