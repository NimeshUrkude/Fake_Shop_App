//react native
import { Alert } from "react-native";

//props interface
interface Props{
    title:string;
    message:string;
}

//function to show alert box
function AlertBox(props: Props) {
    Alert.alert(
      props.title,
      props.message,
      [{ text: 'OK'}],
      { cancelable: false }
    );
  }

export default AlertBox;