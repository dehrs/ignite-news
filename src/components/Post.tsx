import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import {
  PostContainer,
  Author,
  AuthorInfo,
  Content,
  CommentForm,
  CommentList,
} from './Post.styles';

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: 'paragraph' | 'link';
  content: string;
}

export interface PostType {
  id: number;
  author: Author;
  publishedAt: Date;
  content: Content[];
}

interface PostProps {
  post: PostType;
}

export function Post({ post }: PostProps) {
  const [comments, setComments] = useState(['Post muito bacana, hein?!']);
  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(
    post.publishedAt,
    "d 'de' LLLL 'ás' HH:mm'h'",
    {
      locale: ptBr,
    },
  );
  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBr,
    addSuffix: true,
  });

  function handleCrateNewComment(event: FormEvent) {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete;
    });

    setComments(commentsWithoutDeletedOne);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório');
  }

  return (
    <PostContainer>
      <header>
        <Author>
          <Avatar src={post.author.avatarUrl} />
          <AuthorInfo>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </AuthorInfo>
        </Author>
        <time
          title={publishedDateFormatted}
          dateTime={post.publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <Content>
        {post.content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === 'link') {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
        {/* <p>Fala galeraa 👋</p>
      <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
      <p>👉 <a href="">jane.design/doctorcare</a> </p>
      <p><a href="">#novoprojeto #nlw #rocketseat</a> </p> */}
      </Content>

      <CommentForm onSubmit={handleCrateNewComment}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comentário"
          onChange={handleNewCommentChange}
          value={newCommentText}
          name="comment"
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={newCommentText.length === 0}>
            Publicar
          </button>
        </footer>
      </CommentForm>
      <CommentList>
        {comments.map(comment => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </CommentList>
    </PostContainer>
  );
}
