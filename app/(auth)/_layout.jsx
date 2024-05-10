import { StyleSheet, Text, View } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Component
          name="sign-in"
          options={{
            headeShown: false,
          }}
        />
        <Stack.Component
          name="sign-up"
          options={{
            headeShown: false,
          }}
        />
      </Stack>
      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({});
