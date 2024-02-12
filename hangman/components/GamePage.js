import { useEffect, useState,useRef } from "react"
import { Text, SafeAreaView, Alert, StyleSheet, View, FlatList, TextInput } from "react-native";
const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);
let attempts = 6
const win = false
let word = []
function GamePage(props) {
    const input = useRef()
    const [count, setCount] = useState(0)
    const [attempts, setAttempts] = useState(6)
    const [inputData,setInputData] = useState("")
    useEffect(() => {
        if (attempts == 0) {
            props.setGameOver(true)
            word = []
        }
        console.log(word.join(""), props.wordSelect)
        if (word.join("") == props.wordSelect) {
            props.setGameOver(true)
            props.setWinner(true)
            word = []
        }
    })

    useEffect(() => {
        word.length = props.wordSelect.length
    }, [])
    function inputCheck(data) {
        if (data) {
            if (!props.wordSelect.split("").includes(data.toLowerCase())) {
                setAttempts((val) => {
                    return val - 1
                })
                return
            }

            if (word.includes(data.toLowerCase())) {
                Alert.alert("Already Exists", "Guess different Letter", [
                    { style: "destructive" }
                ])
            }
            let index = indexOfAll(props.wordSelect.split(""), data.toLowerCase())
            for (const ind of index) {
                word[ind] = data.toLowerCase()
            }
            setCount((c) => {
                return c + 1
            })
        }
    }
    const wordLength = props.wordSelect.length
    return (
        <View style={styles.gameContainer}>
            <Text style={styles.gameText}>Guess The Word</Text>
            <FlatList style={styles.flatList} keyExtractor={(item) => {
                return item
            }} scrollEnabled={false} numColumns={wordLength} data={props.wordSelect.split("")} renderItem={(item) => {
                return <View style={styles.wordContainer}>
                    <Text style={styles.word}>{word.find((val) => { return val === item.item })}</Text>
                </View>
            }} />
            <View style={styles.attemptsContainer}>
                
                <Text style={styles.attemptText}>You Have {attempts} attempts</Text>

                <TextInput value={inputData} onChangeText={inputCheck} keyboardAppearance="dark" maxLength={1} style={styles.input} />
                <Text style={styles.attemptText}>Input Your Guess</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    gameContainer: {
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 100,
        backgroundColor: "#7F27FF",
        flex: 5
    },
    gameText: {
        fontSize: 27,
        color: "white"
    },
    wordContainer: {
        width: 20,
        marginVertical: 10,
        marginHorizontal: 5,
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 2,
        borderColor: "white",
        borderStyle: "solid",

    },
    listContainer: {
        flex: 1,
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    word: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    },
    attemptsContainer: {
        flex: 30,
        flexDirection: "column",
        alignItems: "center"
    },
    attemptText: {
        marginTop: 10,
        fontSize: 20,
        color: "white"
    },
    input: {
        width: 50,
        marginTop: 30,
        borderBottomColor: "white",
        borderBottomWidth: 2,
        fontSize: 30,
        textAlign: "center",
        color: "white"
    }
})

export default GamePage