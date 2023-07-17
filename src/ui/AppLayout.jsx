import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import LoadingScreen from "./LoadingScreen";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="layout">
      {isLoading && <LoadingScreen />}

      <Header />

      <main>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
