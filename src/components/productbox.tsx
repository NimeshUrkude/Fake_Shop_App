//react native
import { Image, StyleSheet, Text, View ,Pressable } from 'react-native';

//interface
import {ApiData} from "../interface";

//navigation libary
import { useNavigation } from '@react-navigation/native';

//props interface
interface Props{
    data:ApiData;
}

//function
function ProductBox(props:Props):JSX.Element{

    //navigation controller
    const navigation = useNavigation();

    return(
        <Pressable onPress={()=>navigation.navigate("Product",{id:props.data.id})}>
            <View style={styles.productBoxDiv}>
                <Image style={styles.productBoxImage} source={{ uri: props.data.image}} />
                <Text numberOfLines={2} style={styles.productBoxTitle}>{props.data.title}</Text>
                <Text style={styles.productBoxPrice}>$ {props.data.price}</Text>
            </View>
        </Pressable>
    )
}

//css
const styles = StyleSheet.create({
    productBoxDiv: {
        backgroundColor:"white",
        borderRadius:2,
        padding:10,
        borderColor:"silver",
        borderWidth:2,
    },
    productBoxImage:{
        height:200,
        resizeMode:"contain",
    },
    productBoxTitle:{
        marginTop:15,
        color:"black",
        fontSize:13,
        height:40,
    },
    productBoxPrice:{
        marginTop:5,
        color:"black",
        fontSize:18,
    }
  });

export default ProductBox;