import Head from 'next/head';

import {
  Container,
  ContainerLayout,
  Content,
  ContentContainer,
  Wrapper,
} from './styles';
import { NavBar, TopBar } from './components';
import { Props } from '../../interface';

export const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <ContainerLayout>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container>
        <TopBar />
        <NavBar />
        <Wrapper>
          <ContentContainer>
            <Content>{children}</Content>
          </ContentContainer>
        </Wrapper>
      </Container>
    </ContainerLayout>
  );
};
