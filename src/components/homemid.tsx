//react native
import { StyleSheet, ScrollView , View } from 'react-native';

//components / page
import Categories from "./categories";

//props interface
interface Props{
    categories:string[]
    setCurrent: React.Dispatch<React.SetStateAction<string>>
}

//function
function HomeMid(props:Props):JSX.Element{
    return(
        <View style={styles.homeMidDiv}>
            <ScrollView horizontal={true}>
            <Categories name={"All"} setCurrent={props.setCurrent}/>
            {props.categories.map((da, index) => (
                <Categories key={index} name={da} setCurrent={props.setCurrent}/>
            ))}
            </ScrollView>
        </View>
    )
}

//css
const styles = StyleSheet.create({
    homeMidDiv: {
      flex: 1,
      marginVertical:10,
      flexDirection:"row",
    },
  });

export default HomeMid;