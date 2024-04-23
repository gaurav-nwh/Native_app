// ProjectCard.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ProjectCard = ({ project, goToScreen }) => {
  const handleClick = () => {
    goToScreen('SubmitAttendance');
  };

  return (
    <TouchableOpacity onPress={handleClick}>
      <View style={styles.card}>
        <Text style={styles.projectName}>{project.name}</Text>
        <Text style={styles.projectCode}>{project.projectCode}</Text>
        <Text style={styles.companyAddress}>{project.companyAddress}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#E0FFFF',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    width: '90%',
    maxWidth: 400,
  },
  projectName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  projectCode: {
    fontSize: 16,
    marginBottom: 5,
  },
  companyAddress: {
    fontSize: 14,
  },
});

export default ProjectCard;
