import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Course from './Course';
import TermSelector from './TermSelector';
import CourseSelector from './CourseSelector';
import { terms, getCourseTerm } from '../utils/course';

const CourseList = ({ courses, view }) => {
  const [selectedTerm, setSelectedTerm] = useState('Fall');
  const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));
  return (
    <View style={styles.container}>
      <TermSelector terms={terms} 
        selectedTerm={selectedTerm} 
        setSelectedTerm={setSelectedTerm} 
      />
      <ScrollView>
        <CourseSelector courses={termCourses} view={view} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({ 
  container: {
    alignItems: 'center',
  },
})

export default CourseList;
