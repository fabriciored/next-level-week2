import { StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const styles = StyleSheet.create({
  done: {
    marginRight: 10,
    borderRadius: 8,
    padding: 24,
    justifyContent: 'space-between',
  },
  next: {
    marginRight: 34,
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 0,
    alignItems: 'flex-start',
  },
  topContainer: {
    marginTop: -100,
  },
  image: {
    width: 360,
    height: 360,
  },
  title: {
    color: '#6A6180',
    fontSize: 50,
    opacity: 0.16,
  },
  subtitle: {
    color: '#6A6180',
    fontSize: 35,
    textAlign: 'left',
  },
});

export default styles;
