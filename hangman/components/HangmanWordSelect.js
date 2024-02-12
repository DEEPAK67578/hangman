import { SectionList, Text, StyleSheet, View, Modal, SafeAreaView, Pressable } from "react-native"
import word from '../Hangman_word'
function HangmanWordSelect({setWorldSelect}) {
    function clickFunc(data) {
       console.log(data)
       setWorldSelect(data)
    }
    return (
        <Modal style={styles.modal} animationType="slide">
                <View style={styles.sectionContainer}>
                    <Text style={styles.catchytext}>Select the word for your opponent</Text>
                    <SectionList sections={word} keyExtractor={(item, index) => item + index} renderItem={(data) => (
                       <Pressable onPress={()=> {clickFunc(data.item)}} style={({ pressed }) => {
                            return pressed ? styles.buttonClick : ""
                        }} android_ripple={{ opacity: 0.5 }}>
                            <View style={styles.item}>
                                <Text style={styles.title}>{data.item}</Text>
                            </View>
                        </Pressable>
                    )} renderSectionHeader={(data) => (
                        <Text style={styles.header}>{data.section.title}</Text>
                    )}>
                    </SectionList>
                </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal:{
       flex:1
    },
    sectionContainer: {
        marginTop:40,
        marginHorizontal: 20,
    },
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: "#9F70FD"
    },
    item: {
        backgroundColor: '#7F27FF',
        padding: 20,
        marginVertical: 8,
        borderRadius: 7,
    },
    header: {
        fontSize: 32,
        backgroundColor: '#fff',
        fontWeight: "bold",
    },
    title: {
        fontSize: 24,
        textTransform: "capitalize",
        color: "white",
    },
    buttonClick: {
        opacity: 0.8
    },
    catchytext:{
        fontSize:20,
        marginVertical:20,
    }
});

export default HangmanWordSelect