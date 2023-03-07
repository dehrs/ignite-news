import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import {
  CommentContainer,
  CommentBox,
  CommentContent,
  AuthorAndTime,
} from './Comment.styles';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount(state => {
      return state + 1;
    });
  }

  return (
    <CommentContainer>
      <Avatar hasBorder={false} src="https://github.com/dehrs.png" />
      <CommentBox>
        <CommentContent>
          <header>
            <AuthorAndTime>
              <strong>Débora Rodrigues</strong>
              <time
                title="22 de Fevereiro ás 16:03"
                dateTime="2023-02-22 16:03:00"
              >
                Cerca de 1h atrás
              </time>
            </AuthorAndTime>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </CommentContent>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </CommentBox>
    </CommentContainer>
  );
}
