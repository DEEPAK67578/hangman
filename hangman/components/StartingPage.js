import { View, Text, StyleSheet, Image, Pressable, SafeAreaView } from "react-native"

function StartingPage({setGameStart}) {
    return (
  <SafeAreaView  style={styles.container}>
    <View style={styles.container}>
        <View>
            <Image style={styles.imageContainer} source={require("../assets/images/hangman.png")}></Image>
        </View>
        <Pressable onPress={()=> {setGameStart(true)}} style={({pressed})=> pressed ? [styles.btn,styles.buttonClick]: styles.btn} android_ripple={{opacity:0.5}}>
            <View style={styles.btnContainer}>
                <Text style={styles.btnText}>Start</Text>
            </View>
        </Pressable>
    </View>
    </SafeAreaView>
)
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#541da3',
      },
    title: {
        fontSize: 30,
        color: "black",
        textTransform: "uppercase",
        marginBottom: 20
    },
    container: {
        margin: 0,
        backgroundColor: "#541da3",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    imageContainer: {
        width: 150,
        height: 150,
        shadowColor: "black",
        shadowOffset: {height:5,width:5},
        shadowOpacity: 1,
        shadowRadius: 4,
    },
    btnText: {
        fontSize: 30,
        color: "black",
    },
    btnContainer: {
        backgroundColor: "#9F70FD",
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius: 7,
        marginTop: 20
    },
    buttonClick:{
        opacity:0.5
    }

})
export default StartingPage