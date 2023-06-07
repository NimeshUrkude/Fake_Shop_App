//react native
import { Pressable, StyleSheet, Text, View } from 'react-native';

//props interface
interface Props{
  name:string;
  setCurrent: React.Dispatch<React.SetStateAction<string>>
}

//function
function Categories(props:Props):JSX.Element{
    return(
      <Pressable onPress={()=>props.setCurrent(props.name)}>
        <View style={styles.categoriesDiv}>
          <Text style={styles.categoriesText}>{props.name}</Text>
        </View>
      </Pressable>
    )
}

//css
const styles = StyleSheet.create({
  categoriesDiv: {
    width:150,
    height:50,
    borderRadius:20,
    marginHorizontal:10,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesText: {
    color: 'white',
    fontSize: 16,
    textTransform:"capitalize",
  }
});

export default Categories;