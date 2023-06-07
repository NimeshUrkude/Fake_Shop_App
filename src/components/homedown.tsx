//react
import { useEffect, useState } from 'react';

//react native
import { StyleSheet, View, FlatList } from 'react-native';

//interface
import { ApiData } from '../interface';

//components / page
import ProductBox from "./productbox";

//props interface
interface Props{
  products:ApiData[];
  current:string;
}

//function
function HomeDown(props:Props):JSX.Element{
  //state to save what to show
  const [showProducts,setShowProducts] = useState<ApiData[]>([]);

  //useeffect to save what to show by calculating with props.current and saving data from props.products to state
  useEffect(()=>{
    if(props.current==="All"){setShowProducts(props.products);}
    else{setShowProducts(props.products.filter((x) => x.category === props.current));}
  },[props.current])

  //implenet way to render all components
  const renderItem = ({ item } : { item : ApiData }) => {
    return (
      <View style={styles.productBoxContainer}>
        <ProductBox data={item} />
      </View>
    );
  };

  return (
    <View style={styles.HomeDownDiv}>
      <FlatList
        data={showProducts}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

//css
const styles = StyleSheet.create({
    HomeDownDiv: {
      flex: 8,
    },
    productBoxContainer: {
      flex: 1,
      margin: 8,
    },
});

export default HomeDown;