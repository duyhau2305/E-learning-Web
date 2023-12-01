import "./App.css";
import "./styles/layout.css";
import "./styles/home.css";

import { Providers } from "./lib/providers";
import Routers from "./routers";

export default function App() {
  return (
    <Providers>
      <Routers/>
    </Providers>
  );
}
