import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import style from "./Posts.module.css";
import { useState } from "react";

import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export const Post = ({ author, content, publishedAt }) => {
  const [comments, setComments] = useState(["Comentario muito bom"]);

  const [newCommentText, setNewCommentText] = useState("");

  const publishedAtString = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelative = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleCreateNewComment = () => {
    event.preventDefault();

    setComments([...comments, newCommentText]);

    setNewCommentText("");
  };

  const handleNewCommentChange = () => {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  };

  const deleteComment = (comment) => {
    const newComments = comments.filter((item) => item !== comment);

    setComments(newComments);
  };

  const handleNewCommentInvalid = () => {
    event.target.setCustomValidity("O comentario não pode ser vazio");
  };

  return (
    <article className={style.post}>
      <header>
        <div className={style.author}>
          <Avatar src={author.avatar} />
          <div className={style.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedAtString} dateTime={publishedAt.toISOString()}>
          {publishedDateRelative}
        </time>
      </header>

      <div className={style.content}>
        {content.map((item, index) => {
          if (item.type === "paragraph") {
            return <p key={index}>{item.content}</p>;
          } else if (item.type === "link") {
            return (
              <p key={index}>
                <a href="">{item.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form
        onSubmit={() => handleCreateNewComment()}
        className={style.commentForm}
      >
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          placeholder="Deixe seu comentario"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={newCommentText.length === 0}>
            Comentar
          </button>
        </footer>
      </form>

      <div className={style.commentList}>
        {comments.map((comment, index) => (
          <Comment
            key={index}
            content={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
};
