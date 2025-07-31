import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { FavoritesContext } from "./FavoritesContext";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useContext } from "react";

const Favorites = ({ navigation }) => {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  const clearAll = () => {
    Alert.alert("Clear All", "Are you sure you want to remove all favorites?", [
      { text: "Cancel" },
      { text: "Yes", onPress: () => setFavorites([]) },
    ]);
  };

  const clearOne = (id) => {
    const filtered = favorites.filter((item) => item.id !== id);
    setFavorites(filtered);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => navigation.navigate("EventDetail", { event: item })}
      >
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.genInfo}>
          <Text>
            {item.date} | {item.location}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => clearOne(item.id)}
        style={styles.removeIcon}
      >
        <Icon name="close" size={22} color="#e74c3c" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Favorite Events</Text>

      {favorites.length === 0 ? (
        <View style={styles.emptyContainer}>
          <TouchableOpacity
            style={styles.emptyButton}
            onPress={() =>
              navigation.navigate("Events", { screen: "EventsList" })
            }
          >
            <Icon name="add-circle-outline" size={50} color="#068a69ff" />
            <Text style={styles.emptyText}>Add your favorite events</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <FlatList
            data={favorites}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
          />

          <TouchableOpacity style={styles.buttonStyle} onPress={clearAll}>
            <Text style={styles.buttonText}>Clear All</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#424644ff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 15,
    textAlign: "center",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    marginTop: 10,
    fontSize: 18,
    color: "#fff",
  },
  card: {
    backgroundColor: "#fff",
    marginBottom: 15,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    borderColor: "#191a19ff",
  },
  image: {
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  genInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  removeIcon: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "#fff",
  },
  buttonStyle: {
    marginTop: 20,
    backgroundColor: "#e74c3c",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
  },
});

export default Favorites;
