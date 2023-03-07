import style from "./Avatar.module.css";

export const Avatar = ({ hasBorder = true, src }) => {
  return (
    <img
      className={hasBorder ? style.avatarWithBorder : style.avatar}
      src={src}
    />
  );
};
