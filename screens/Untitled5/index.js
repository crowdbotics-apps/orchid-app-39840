import { FlatList } from "react-native";
import { Text } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled5 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}></ScrollView>
    <View style={styles.SkbXCeWb}></View><Text style={styles.PsYFaMnp}>Appointments</Text><SafeAreaView style={styles.XLRCWbCY}><FlatList style={styles.WRsRrhFP}></FlatList></SafeAreaView></SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  SkbXCeWb: {
    height: 572,
    width: 356,
    backgroundColor: "#fff",
    borderRadius: 0,
    color: "#777777",
    borderColor: "#fff",
    position: "absolute",
    top: 0,
    left: 0
  },
  vypSIhFq: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 2,
    marginVertical: 12
  },
  uPMoqMmd: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 2,
    marginVertical: 12
  },
  PsYFaMnp: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
    top: 19,
    left: 14
  },
  XLRCWbCY: {
    flex: 1,
    backgroundColor: "#fff"
  },
  gfFIqIkf: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    paddingHorizontal: 20
  },
  RscUFiJK: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 2,
    marginVertical: 12
  },
  WRsRrhFP: {
    paddingTop: 0,
    marginHorizontal: 20,
    backgroundColor: "#f1f1f1"
  }
});
export default Untitled5;