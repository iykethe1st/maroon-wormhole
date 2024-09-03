import WormholeConnect from "@wormhole-foundation/wormhole-connect";
import logo from "./logoDark.png";
import "./App.css";

const config = {
  env: "mainnet",
  networks: ["ethereum", "polygon", "solana", "base"],
  tokens: ["ETH", "WETH", "MATIC", "WMATIC"],
  rpcs: {
    ethereum: "https://rpc.ankr.com/eth",
    solana: "https://rpc.ankr.com/solana",
  },
};

const theme = {
  background: {
    default: "#1E0C1B",
  },
};
function App() {
  return (
    <div className="h-screen bg-dark">
      <div className="px-12 pt-6">
        <a className="" href="/">
          <img width={200} height={150} alt="logo" src={logo} />
        </a>
      </div>
      <WormholeConnect config={config} theme={theme} />
    </div>
  );
}

export default App;
