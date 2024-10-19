import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { WhatsAppCallsFakeData } from './WhatsAppCallsFakeData';

const WhatsAppCalls = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.listItem} 
      onPress={() => navigation.navigate('giaodiencanhan', { user: item })}
    >
      <View style={styles.row}>
        {/* Avatar */}
        <Image source={{ uri: item.image }} style={styles.avatar} />
        
        {/* Thông tin người dùng */}
        <View style={styles.infoContainer}>
          <Text style={styles.callerName}>{item.name}</Text>
          <Text style={styles.callTime}>{item.date} - {item.time}</Text>
        </View>

        {/* Icon call hoặc video call */}
        <View style={styles.iconContainer}>
          <Image source={{ uri: item.callIcon }} style={styles.callIcon} />
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={WhatsAppCallsFakeData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listItem: {
    borderBottomWidth: 1,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',  // Đảm bảo khoảng cách giữa các thành phần
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,
  },
  callerName: {
    fontWeight: '600',
    fontSize: 15,
  },
  callTime: {
    fontSize: 12,
    color: '#666',
  },
  iconContainer: {
    marginLeft: 'auto',  // Đẩy icon sang bên phải
  },
  callIcon: {
    width: 28,
    height: 28,
    tintColor: '#4caf50', // Nếu muốn đổi màu icon
  },
});

export default WhatsAppCalls;
