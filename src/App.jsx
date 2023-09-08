import React from "react";
import ReactDOM from "react-dom/client";
import store from "./store/store";
import { Provider } from "react-redux";
import Card from "./components/Card";

const App = () => {
  return (
    <Provider store={store}>
      <div className="h-screen w-screen bg-gradient-to-tl from-purple-400 to-blue-600">
        <div className="container mx-auto flex justify-center items-center h-screen">
          <Card />
        </div>
      </div>
    </Provider>
  );
};
const rootele = ReactDOM.createRoot(document.getElementById("root"));
rootele.render(<App />);
