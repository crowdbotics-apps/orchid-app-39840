import { Text } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.DAhBkdIL}><View style={styles.jTBlGMms}><Text style={styles.aYnoTTvO}>Sign Up</Text></View></View></ScrollView>
    <Text style={styles.pYJQpzFC}>Sign in</Text><Text style={styles.VclhaxSm}>Welcome Back</Text><Text style={styles.BOPRXOCa}>Lorem ipsum dolor sit amet,
consectetur adipiscing elit, sed do
eiusmod tempor</Text><View style={styles.JzUBaTwa}><Text style={styles.jMmJBOxM}>Log In</Text></View></SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  pYJQpzFC: {
    fontSize: 42,
    fontWeight: "500",
    textAlign: "center",
    position: "absolute",
    top: 20,
    left: 116
  },
  CoAUzvnf: {
    width: 211,
    height: 20,
    lineHeight: 14,
    fontSize: 24,
    borderRadius: 0,
    textAlign: "center",
    position: "absolute",
    top: 276,
    left: 72.5
  },
  DAhBkdIL: {
    height: 572,
    width: 359,
    backgroundColor: "#fff",
    borderRadius: 0,
    color: "#777777",
    borderColor: "#fff",
    position: "absolute",
    top: 0,
    left: 0
  },
  VclhaxSm: {
    width: 211,
    height: 20,
    lineHeight: 14,
    fontSize: 24,
    borderRadius: 0,
    textAlign: "center",
    position: "absolute",
    top: 300,
    left: 72.5
  },
  BOPRXOCa: {
    width: 211,
    height: 43,
    lineHeight: 14,
    fontSize: 12,
    borderRadius: 0,
    textAlign: "center",
    position: "absolute",
    top: 339,
    left: 73,
    fontFamily: "inherit"
  },
  wigRtRDu: {
    width: 285,
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    height: 50
  },
  eWDoJvqN: {
    marginBottom: 35
  },
  jTBlGMms: {
    height: 45,
    width: 266,
    backgroundColor: "#000",
    borderRadius: 6,
    color: "#777777",
    position: "absolute",
    left: 46.5,
    top: 419
  },
  aYnoTTvO: {
    width: 266,
    height: 16,
    lineHeight: 14,
    fontSize: 16,
    borderRadius: 0,
    textAlign: "center",
    color: "#fff",
    fontWeight: "700",
    position: "absolute",
    top: 14.5
  },
  JzUBaTwa: {
    height: 45,
    width: 266,
    backgroundColor: "#fff",
    borderRadius: 6,
    color: "#777777",
    position: "absolute",
    left: 47,
    top: 493,
    borderWidth: 1
  },
  jMmJBOxM: {
    width: 266,
    height: 16,
    lineHeight: 14,
    fontSize: 16,
    borderRadius: 0,
    textAlign: "center",
    color: "#000",
    fontWeight: "700",
    position: "absolute",
    top: 14.5
  }
});
export default Untitled1;