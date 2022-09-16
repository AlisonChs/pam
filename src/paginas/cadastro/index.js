import { Text,View, InputText } from "react-native";
import { styles } from './styles.js'


export default function Cadastrar(){

    return(

        <View style={styles.container}>

            <Text style={styles.h1}>CADASTRAR </Text>

            <InputText placeholder="Insira seu e-mal"></InputText>

        </View>



    );

}