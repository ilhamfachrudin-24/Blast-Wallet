import React,{
useState
} from "react";


import {

View,

Text,

TouchableOpacity,

StyleSheet

} from "react-native";


import {

Colors

} from "../theme/theme";


import {

analyzePortfolio

} from "../services/portfolioAIService";





export default function PortfolioReportScreen(){



const [report,setReport]=useState<any>(null);





function generate(){



setReport(

analyzePortfolio([

{

symbol:"SOL",

value:500

},

{

symbol:"ETH",

value:500

}

])

);


}





return (

<View style={styles.container}>


<Text style={styles.title}>
Portfolio Intelligence
</Text>




<TouchableOpacity

style={styles.button}

onPress={generate}

>


<Text style={styles.text}>
Generate Report
</Text>


</TouchableOpacity>




{

report &&

<Text style={styles.result}>

Total:

{report.stats.totalValue}


{"\n"}

Assets:

{report.allocation.length}

</Text>

}



</View>

);

}





const styles=StyleSheet.create({

container:{
flex:1,
backgroundColor:Colors.background,
padding:24,
justifyContent:"center"
},


title:{
color:Colors.white,
fontSize:30,
fontWeight:"900"
},


button:{
marginTop:30,
backgroundColor:Colors.primary,
padding:18,
borderRadius:20
},


text:{
color:Colors.white,
textAlign:"center"
},


result:{
marginTop:30,
color:Colors.success
}

});
