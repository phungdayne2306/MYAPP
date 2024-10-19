import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

// Dữ liệu giả cho các tùy chọn trong Profile
const options = [
  { id: '1', title: 'Order', image: 'https://img.icons8.com/office/40/000000/order-history.png' },
  { id: '2', title: 'Like', image: 'https://img.icons8.com/office/40/000000/facebook-like.png' },
  { id: '3', title: 'Comment', image: 'https://img.icons8.com/office/40/000000/comments.png' },
  { id: '4', title: 'Download', image: 'https://img.icons8.com/office/40/000000/download.png' },
  { id: '5', title: 'Edit', image: 'https://img.icons8.com/office/40/000000/edit.png' },
];

const FlatListProfile = () => {
  return (
    <View style={styles.container}>
      {/* Header với thông tin người dùng */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Jane Doe</Text>
      </View>

      {/* FlatList để hiển thị các tùy chọn */}
      <FlatList
        data={options}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.listItem}>
            <Image source={{ uri: item.image }} style={styles.icon} />
            <Text style={styles.title}>{item.title}</Text>
            <Image
              source={{ uri: 'https://img.icons8.com/ios/40/000000/chevron-right.png' }}
              style={styles.button}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#FFA500', // Màu cam cho cover image
    alignItems: 'center',
    paddingVertical: 40,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 4,
    borderColor: '#FF6347',
  },
  name: {
    fontSize: 22,
    color: '#20B2AA',
    marginTop: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderColor: '#EEE',
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    color: '#EE82EE',
    flex: 1,
  },
  button: {
    width: 40,
    height: 40,
  },
});

export default FlatListProfile;
