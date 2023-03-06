import { Header } from "./components/Header";

import style from "./App.module.css";

function App() {
  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <aside>aside</aside>
        <main>main</main>
      </div>
    </>
  );
}

export default App;
