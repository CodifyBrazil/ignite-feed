import { Header } from "./components/Header";

import style from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Posts";

const posts = [
  {
    id: 1,
    author: {
      name: "Rafael Guilber",
      avatar: "https://github.com/codifybrazil.png",
      role: "Front-end Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀{" "}',
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-03-07T10:00:00.000Z"),
  },
  {
    id: 2,
    author: {
      name: "Mayk Brito",
      avatar: "https://github.com/maykbrito.png",
      role: "Educador na Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa Mayk na Area👋" },
      {
        type: "paragraph",
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀{" "}',
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-03-01T08:00:00.000Z"),
  },
];

function App() {
  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  );
}

export default App;
