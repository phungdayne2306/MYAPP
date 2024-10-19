import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import FoodProductList from './FoodProductList'; // Đảm bảo đường dẫn chính xác

const MenuScreen = () => (
  <View style={styles.container}>
    <FlatList
      data={FoodProductList}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <FoodItem item={item} />}
    />
    <TouchableOpacity style={styles.continueButton}>
      <Text style={styles.continueText}>Continue</Text>
    </TouchableOpacity>
  </View>
);
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

const FoodItem = ({ item }) => {
  const [quantity, setQuantity] = useState(0); // State để quản lý số lượng sản phẩm

  // Hàm tăng số lượng
  const increaseQuantity = () => setQuantity(quantity + 1);

  // Hàm giảm số lượng
  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text>{item.description}</Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={decreaseQuantity} style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <View style={styles.quantityBox}>
          <Text style={styles.quantityText}>{quantity}</Text>
        </View>
        <TouchableOpacity onPress={increaseQuantity} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#f2f2f2' },
  item: { flexDirection: 'row', backgroundColor: '#fff', marginBottom: 10, borderRadius: 8, padding: 10, alignItems: 'center' },
  image: { width: 60, height: 60, borderRadius: 10, marginRight: 10 },
  details: { flex: 1, justifyContent: 'center' },
  name: { fontSize: 18, fontWeight: 'bold' },
  price: { color: 'green', marginTop: 5 },
  continueButton: { backgroundColor: '#4CAF50', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 10 },
  continueText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#FF5722', // Màu cam cho nút
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityBox: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    // Không có border (không có khung)
    backgroundColor: '#f2f2f2', // Có thể thêm màu nền để làm nổi bật số lượng
    marginHorizontal: 10,
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MenuScreen;
