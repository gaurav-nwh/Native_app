// AllProjects.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import useGetAllProjectsForAdmin from '../CommomUtilities/customHooks/userGetAllProjectsForAdmin';
import ProjectCard from './ProjectCard';

const AllProjects = ({ goToScreen }) => {
  const projects = useGetAllProjectsForAdmin();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.appText}>All Projects Screen</Text>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} goToScreen={goToScreen} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  appText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default AllProjects;
