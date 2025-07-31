import {
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect, useContext } from "react";
import { FavoritesContext } from "./FavoritesContext";
import Icon from "react-native-vector-icons/MaterialIcons";

const EventDetail = ({ route }) => {
  const { event } = route.params;
  const { favorites, setFavorites } = useContext(FavoritesContext);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const exists = favorites.some((e) => e.id === event.id);
    setIsFavorite(exists);
  }, [favorites]);

  const updatefavorites = () => {
    if (isFavorite) {
      setFavorites(favorites.filter((e) => e.id !== event.id));
    } else {
      setFavorites([...favorites, event]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={{ uri: event.image }} style={styles.image} />

        <View style={styles.content}>
          <Text style={styles.title}>{event.title}</Text>

          <View style={styles.genInfo}>
            <Icon name="event" size={20} color="blue" />
            <Text style={styles.genInfoText}>{event.date}</Text>
          </View>

          <View style={styles.genInfo}>
            <Icon name="schedule" size={20} color="green" />
            <Text style={styles.genInfoText}>{event.time}</Text>
          </View>

          <View style={styles.genInfo}>
            <Icon name="place" size={20} color="red" />
            <Text style={styles.genInfoText}>{event.location}</Text>
          </View>

          <Text style={styles.descriptionTitle}>About this event</Text>
          <Text style={styles.description}>{event.description}</Text>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.buttonStyle} onPress={updatefavorites}>
        <Icon
          name={isFavorite ? "favorite" : "favorite-border"}
          size={22}
          color={isFavorite ? "red" : "white"}
          style={{ marginRight: 8 }}
        />

        <Text style={styles.buttonText}>
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  scrollContainer: {
    padding: 5,
    backgroundColor: "#fff",
  },
  image: {
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#222",
  },
  genInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  genInfoText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#555",
  },
  descriptionTitle: {
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
    color: "#222",
  },
  description: {
    fontSize: 16,
    marginTop: 20,
    lineHeight: 22,
    color: "#555",
  },
  buttonStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4f4d4dff",
    padding: 16,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
  },
});

export default EventDetail;
