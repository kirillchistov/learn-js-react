import { Layout } from "../Layout/layout";
// import { restaurants } from "../../materials/mock";
import { Restaurants } from "../Restaurants/restaurants";

export const App = ({ title }) => {
  return (
    <Layout title={title}>
      <Restaurants />
    </Layout>
  );
};