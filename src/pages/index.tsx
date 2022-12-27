import { Grid } from '@mui/material';
import { Layout, VideoCard } from '../shared';
import { Container } from './_styles';

interface Props {
  data: {
    id: number;
    title: string;
    author: string;
    authorID: number;
    authorName: string;
    authorAvatar: string;
    views: number;
    thumb: string;
    videoURL: string;
    updateAt: Date;
    checked: boolean;
  }[];
}

const Home: React.FC<Props> = ({ data }) => {
  return (
    <Layout title="YouTube">
      <Container>
        <Grid container spacing={4}>
          {data?.map?.((data) => (
            <Grid key={data.id} item xl={3} lg={3} md={4} sm={6} xs={12}>
              <VideoCard item={data} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
};

export async function getStaticProps() {
  const data = [
    {
      id: 1,
      title: 'NextJS com Typescript e MUI #Aula1',
      authorID: 1,
      authorName: 'Samuel Ramos',
      authorAvatar: 'avatarURL',
      author: 'Samuel Ramos',
      views: 153,
      thumb: '/thumbs/next01.jpg',
      videoURL: 'url',
      updateAt: new Date(),
      checked: true,
    },
    {
      id: 2,
      title: 'NextJS com Typescript e MUI #Aula2',
      authorID: 1,
      authorName: 'Samuel Ramos',
      authorAvatar: 'avatarURL',
      author: 'Samuel Ramos',
      views: 153,
      thumb: '/thumbs/next02.jpg',
      videoURL: 'url',
      updateAt: new Date(),
      checked: false,
    },
    {
      id: 3,
      title: 'NextJS com Typescript e MUI #Aula3',
      authorID: 1,
      authorName: 'Samuel Ramos',
      authorAvatar: 'avatarURL',
      author: 'Samuel Ramos',
      views: 153,
      thumb: '/thumbs/next03.jpg',
      videoURL: 'url',
      updateAt: new Date(),
      checked: false,
    },
    {
      id: 4,
      title: 'NextJS com Typescript e MUI #Aula4',
      authorID: 1,
      authorName: 'Samuel Ramos',
      authorAvatar: 'avatarURL',
      author: 'Samuel Ramos',
      views: 153,
      thumb: '/thumbs/next04.jpg',
      videoURL: 'url',
      updateAt: new Date(),
      checked: false,
    },
    {
      id: 5,
      title: 'NextJS com Typescript e MUI #Aula4',
      authorID: 1,
      authorName: 'Samuel Ramos',
      authorAvatar: 'avatarURL',
      author: 'Samuel Ramos',
      views: 153,
      thumb: '/thumbs/next04.jpg',
      videoURL: 'url',
      updateAt: new Date(),
      checked: true,
    },
    {
      id: 6,
      title: 'NextJS com Typescript e MUI #Aula4',
      authorID: 1,
      authorName: 'Samuel Ramos',
      authorAvatar: 'avatarURL',
      author: 'Samuel Ramos',
      views: 153,
      thumb: '/thumbs/next04.jpg',
      videoURL: 'url',
      updateAt: new Date(),
      checked: false,
    },
    {
      id: 7,
      title: 'NextJS com Typescript e MUI #Aula4',
      authorID: 1,
      authorName: 'Samuel Ramos',
      authorAvatar: 'avatarURL',
      author: 'Samuel Ramos',
      views: 153,
      thumb: '/thumbs/next04.jpg',
      videoURL: 'url',
      updateAt: new Date(),
      checked: true,
    },
    {
      id: 8,
      title: 'NextJS com Typescript e MUI #Aula4',
      authorID: 1,
      authorName: 'Samuel Ramos',
      authorAvatar: 'avatarURL',
      author: 'Samuel Ramos',
      views: 153,
      thumb: '/thumbs/next04.jpg',
      videoURL: 'url',
      updateAt: new Date(),
      checked: true,
    },
    {
      id: 9,
      title: 'NextJS com Typescript e MUI #Aula4',
      authorID: 1,
      authorName: 'Samuel Ramos',
      authorAvatar: 'avatarURL',
      author: 'Samuel Ramos',
      views: 153,
      thumb: '/thumbs/next04.jpg',
      videoURL: 'url',
      updateAt: new Date(),
      checked: false,
    },
    {
      id: 10,
      title: 'NextJS com Typescript e MUI #Aula4',
      authorID: 1,
      authorName: 'Samuel Ramos',
      authorAvatar: 'avatarURL',
      author: 'Samuel Ramos',
      views: 153,
      thumb: '/thumbs/next04.jpg',
      videoURL: 'url',
      updateAt: new Date(),
      checked: false,
    },
    {
      id: 11,
      title: 'NextJS com Typescript e MUI #Aula4',
      authorID: 1,
      authorName: 'Samuel Ramos',
      authorAvatar: 'avatarURL',
      author: 'Samuel Ramos',
      views: 153,
      thumb: '/thumbs/next04.jpg',
      videoURL: 'url',
      updateAt: new Date(),
      checked: false,
    },
    {
      id: 12,
      title: 'NextJS com Typescript e MUI #Aula4',
      authorID: 1,
      authorName: 'Samuel Ramos',
      authorAvatar: 'avatarURL',
      author: 'Samuel Ramos',
      views: 153,
      thumb: '/thumbs/next04.jpg',
      videoURL: 'url',
      updateAt: new Date(),
      checked: false,
    },
    {
      id: 13,
      title: 'NextJS com Typescript e MUI #Aula4',
      authorID: 1,
      authorName: 'Samuel Ramos',
      authorAvatar: 'avatarURL',
      author: 'Samuel Ramos',
      views: 153,
      thumb: '/thumbs/next04.jpg',
      videoURL: 'url',
      updateAt: new Date(),
      checked: true,
    },
  ];
  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    },
  };
}

export default Home;
