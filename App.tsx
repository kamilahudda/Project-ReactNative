import React from 'react';
import {
  StatusBar,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

export default function App() {
  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />

      {/* Background mobil hitam */}
      <ImageBackground
        source={require('./assets/images/bg.jpg')}
        style={styles.bg}
        resizeMode="cover"
      >
        {/* Overlay biar teks tetap terbaca */}
        <LinearGradient
          colors={['rgba(0,0,0,0.4)', 'rgba(0,0,0,0.95)']}
          style={styles.overlay}
        />

        {/* Konten */}
        <View style={styles.content}>
          <Text style={styles.title}>Power in the Shadows</Text>
          <Text style={styles.subtitle}>
            Elegance is not about being noticed, it’s about being remembered.
          </Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Discover More</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#000' },
  bg: { flex: 1, justifyContent: 'flex-end' },
  overlay: { ...StyleSheet.absoluteFillObject },
  content: { position: 'absolute', left: 24, right: 24, bottom: 60 },
  title: {
    color: '#fff',
    fontSize: 34,
    fontWeight: '900',
    marginBottom: 12,
    textTransform: 'uppercase',
    letterSpacing: 3,
  },
  subtitle: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 32,
    fontStyle: 'italic',
  },
  button: {
    borderWidth: 1.5,
    borderColor: '#fff',
    paddingVertical: 14,
    borderRadius: 999,
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
});
