import { Layout } from "../Layout/index";
import { restaurants } from "../../../materials/mock";
import { RestaurantList } from "../Tabs/restaurant-list";

export const App = ({ title }) => {
  return (
    <Layout title={title}>
      <RestaurantList restaurants={restaurants} />
    </Layout>
  );
};