import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    textIn: {
        fontSize: 20,
        fontWeight: "bold",
        justifyContent: "center"
    },

    formContext: {
        width:"100%",
        height:"85%",
        justifyContent: "space-around",
        backgroundColor: "#ffffff",
        alignItems:"center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderRadius: 30,
        paddingTop: 0,
    },

    form: {
        width:"100%",
        height:"auto",
        marginTop: 0,
        padding: 10,
    },

    formLabel: {
        color:"#000000",
        fontSize: 18,
        paddingLeft: 20,
    },

    input: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },

    buttonCalculator: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#ff0043",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 30,
    },

    textButtonCalculator: {
        fontSize: 20,
        color: "#ffffff",
    },

    errorMessage: {
        fontSize: 12,
        color: "red",
        fontWeight: "bold",
        paddingLeft: 20,
    },

    exhibitionResultImc: {
        width: "100%",
        height: "50%",
    }
});

export default styles