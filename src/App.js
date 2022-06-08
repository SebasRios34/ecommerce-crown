import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.components.jsx";
import Navigation from "./routes/navigation/navigation.components.jsx";
import Authentication from "./routes/authentication/authentication.components";
import Shop from "./routes/shop/shop.component.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
