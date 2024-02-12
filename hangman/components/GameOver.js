import { View, Text, StyleSheet, Image, Pressable } from "react-native"

function GameOver(props) {
    function restart() {
        props.setWorldSelect(null)
        props.setGameOver(false)
        props.setWinner(false)
    }
    return <View style={styles.gameContainer}>
        {!props.winner && <>

            <Image style={styles.imageContainer} source={require("../assets/images/hanging.gif")}></Image>
            <Text style={[styles.gameOverText, styles.word]}>Chosen Word is {props.wordSelect}</Text>
            <Text style={styles.gameOverText}>You Lost !!!</Text>
        </>}
        {props.winner && <>
            <Image source={require("../assets/images/win.gif")}></Image>
            <Text style={styles.text}>You Guessed right.Word is {props.wordSelect}</Text>
            <Text style={[styles.winner]}>You Survived !!!</Text>
        </>}
        <Pressable onPress={restart} style={({ pressed }) => {
            return pressed ? [styles.restartContainer, styles.opacity] : styles.restartContainer
        }}><Text style={styles.restart}>Restart</Text></Pressable>
    </View >
}


const styles = StyleSheet.create({
    text:{
        fontSize:24,
        marginVertical:20,
        color:"white"
    },
    gameContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#541da3",
    },

    gameOverText: {
        color: "white",
        fontSize: 30,
    },
    imageContainer: {
        height: 300,
        width: 150
    },
    restart: {
        color: "white",
        fontSize: 25
    },
    restartContainer: {
        padding: 10,
        backgroundColor: "#FF8911",
        borderRadius: 6,
        marginTop: 20
    },
    pressed: {
        opacity: 0.2
    },
    winner: {
        fontSize: 30,
        color: "white"
    },
    word: {
        marginBottom: 10,
    }
})

export default GameOver