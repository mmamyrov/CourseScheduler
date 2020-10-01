import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { firebase } from "../firebase.js";
import Course from "../components/Course";
import CourseList from "../components/CourseList";
import UserContext from "../UserContext";
import CourseEditScreen from "./CourseEditScreen";

const fixCourses = json => ({
  ...json,
  courses: Object.values(json.courses)
});

const ScheduleScreen = ({ navigation }) => {
  const user = useContext(UserContext);
  const canEdit = user && user.role === 'admin';
  const [schedule, setSchedule] = useState({ title: "", courses: [] });

  const view = (course) => {
    navigation.navigate(canEdit ? "CourseEditScreen" : "CourseDetailScreen", { course });
  };

  useEffect(() => {
    const db = firebase.database().ref();
    db.on('value', snap => {
      if (snap.val()) setSchedule(fixCourses(snap.val()));
    }, error => console.log(error));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Banner title={schedule.title} />
      <CourseList courses={schedule.courses} view={view} />
    </SafeAreaView>
  );
};

const Banner = ({ title }) => <Text style={styles.bannerStyle}>{title}</Text>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 20
  },
  bannerStyle: {
    color: "#888",
    fontSize: 32
  }
});

export default ScheduleScreen;