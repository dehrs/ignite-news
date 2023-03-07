import { Header } from './components/Header';
import { Post, PostType } from './components/Post';
import { Sidebar } from './components/Siderbar';

import GlobalStyle from './global';
import { Wrapper } from './App.styles.js';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-02-27 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-02-26 20:00:00'),
  },
];

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <Sidebar />
        <main>
          {posts.map(post => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </Wrapper>
    </div>
  );
}

export default App;
