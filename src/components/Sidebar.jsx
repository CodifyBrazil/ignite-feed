import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

import style from "./Sidebar.module.css";

export const Sidebar = () => {
  return (
    <aside className={style.sidebar}>
      <img
        className={style.cover}
        src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className={style.profile}>
        <Avatar src={"https://github.com/maykbrito.png"} />

        <strong>Rafael Guilber</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
};
