import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";

const HomeRoute = () => <Text>Home</Text>;

const OrderRoute = () => <Text>Order</Text>;

const ProfileRoute = () => <Text>Profile</Text>;

const HistoryRoute = () => <Text>History</Text>;

const BottomNav = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "home", title: "Home" },
    { key: "order", title: "Order" },
    { key: "profile", title: "Profile" },
    { key: "history", title: "History" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    order: OrderRoute,
    profile: ProfileRoute,
    history: HistoryRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomNav;
