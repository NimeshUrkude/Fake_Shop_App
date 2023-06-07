//react
import { useEffect, useState } from 'react';

//react native
import { StyleSheet , View , Text , Image} from 'react-native';

//axios libary
import axios from 'axios';

//navigation libary
import { ScrollView } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';

//component / page
import AlertBox from "../components/alertbox";

//interface
import { ApiData } from '../interface';

//env
import { ENV_KEY } from "@env";

//function
function Product():JSX.Element{
  //get route , here that is id
  const route = useRoute();
  const { id } = route.params as { id: number };

  //state to save data
  const [data,setData] = useState<ApiData>();

  //useeffect to fetch data
  useEffect(()=>{
    async function fetchData() {
      try {
        //fetch data and save 
        const url = ENV_KEY + id;
        const productsResponse = await axios.get(url);
        setData(productsResponse.data);
      }
      catch (error) {
        //if got error show alert
        AlertBox({title: "Error", message: "Server Not Responding, Please Try Again Later"})
      }
    }
    fetchData();
  },[])

  //to convert first letter capital of a string
  const capitalizeFirstLetter = (str : string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  //convert number into star
  const Rating = ({ value } : {value : number}) => {
    let stars = '';
    for (let i = 0; i < Math.floor(value); i++) {
      stars += '⭐️';
    }
    return <Text>{stars}</Text>;
  }

  //show this when api-fetch is completed
  if(data!=undefined){
    return(
      <ScrollView>
        <View style={styles.productDiv}>
          <Image style={styles.productImage} source={{ uri: data.image}} />
          <Text style={styles.productCategory}>{capitalizeFirstLetter(data.category)}</Text>
          <Text style={styles.productTitle}>{data.title}</Text>
          <Rating value={data.rating.rate} />
          <Text style={styles.productPrice}>${data.price}</Text>
          <Text style={styles.productDescription}>{data.description}</Text>
          <View style={styles.productBuyDiv}>
            <Text style={styles.productBuyText}>BUY</Text>
          </View>
        </View>
      </ScrollView>
      )
  }

  //api-fetch under process
  return(<View style={styles.productDiv}/>)
}

//css
const styles = StyleSheet.create({
  productDiv: {
    flex: 1,
    backgroundColor: 'white',
    padding:10,
  },
  productImage:{
    marginVertical:20,
    height:300,
    resizeMode:"contain",
  },
  productCategory:{
    color:"gray",
    fontSize:18,
    marginVertical:2,
  },
  productTitle:{
    color:"black",
    fontSize:21,
    marginVertical:2,
  },
  productRating:{
    color:"black",
    fontSize:16,
    marginVertical:2,
  },
  productPrice:{
    color:"black",
    fontSize:24,
    marginVertical:2,
  },
  productDescription:{
    color:"gray",
    fontSize:15,
    marginVertical:2,
  },
  productBuyDiv:{
    backgroundColor:"purple",
    width:100,
    paddingVertical:15,
    paddingHorizontal:20,
    marginVertical:20,
    borderRadius:20,
  },
  productBuyText:{
    color:"white",
    textAlign:"center",
    fontSize:25,
  },
});

export default Product;