import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';

const giaodiencanhan = ({ route }) => {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      {/* Cover Image với overlay màu cam */}
      <ImageBackground
        source={{ uri: user.image }}
        style={styles.coverImage}
        imageStyle={{ opacity: 0.3 }} // Độ trong suốt của ảnh nền
      >
        
        <Text style={styles.name}>{user.name}</Text>
      </ImageBackground>

      {/* Avatar */}
      <Image source={{ uri: user.image }} style={styles.avatar} />

      {/* Thông tin cá nhân */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Email:</Text>
        <Text style={styles.infoValue}>{user.email || 'jane.doe@example.com'}</Text>

        <Text style={styles.infoLabel}>Location:</Text>
        <Text style={styles.infoValue}>{user.location || 'San Francisco, CA'}</Text>

        <Text style={styles.infoLabel}>Bio:</Text>
        <Text style={styles.infoValue}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  coverImage: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Phủ kín toàn bộ ảnh
    backgroundColor: 'orange',
    opacity: 0.5, // Độ trong suốt của lớp phủ
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: -60,
    alignSelf: 'center',
    borderWidth: 3,
    borderColor: '#fff',
  },
  infoContainer: {
    marginTop: 20,
  },
  infoLabel: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  infoValue: {
    marginTop: 5,
  },
});

export default giaodiencanhan;
