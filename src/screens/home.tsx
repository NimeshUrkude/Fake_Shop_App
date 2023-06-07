//react
import { useEffect, useState } from 'react';

//react native
import { StyleSheet , View } from 'react-native';

//axios libary
import axios from 'axios';

//interface
import { ApiData } from '../interface';

//componet / page
import AlertBox from "../components/alertbox";
import HomeMid from "../components/homemid";
import HomeDown from '../components/homedown';

//env
import { ENV_KEY } from "@env";

//function
function Home(): JSX.Element {

  //state to save all categories
  const [categories, setCategories] = useState<string[]>([]);

  //state to save all data
  const [products , setProducts] = useState<ApiData[]>([]);

  //state to save current page
  const [current,setCurrent] = useState<string>("none");

  //useeffect to fetch all data and put in products => find all categories and save in categories
  useEffect(() => {
    async function fetchData() {
      try {

        //fetch data
        const url = ENV_KEY;
        const productsResponse = await axios.get(url);

        //put data in state
        setProducts(productsResponse.data);

        //find all categories 
        const foundCategories: string[] = [];
        for (const item of productsResponse.data) {
            if (!foundCategories.includes(item.category)) {
              foundCategories.push(item.category);
            }
        }

        //save all categories
        setCategories(foundCategories);

        //default set to show all
        setCurrent("All");
      }
      catch (error) {
        //if catch error show alert box
        AlertBox({title: "Error", message: "Server Not Responding, Please Try Again Later"})
      }
    }
    fetchData();
}, []);

  return (
    <View style={styles.homeDiv}>
        <HomeMid categories={categories} setCurrent={setCurrent}/>
        <HomeDown products={products} current={current}/>
    </View>
  );
}


//css
const styles = StyleSheet.create({
  homeDiv: {
    flex: 1,
    backgroundColor: 'white',
  }
});

export default Home;
