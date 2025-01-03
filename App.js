import { StyleSheet, Text, View } from 'react-native';
import AppUI from './src/AppUI';
import TodoProvider from './src/Components/Context';

export default function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
};
