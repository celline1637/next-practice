import { createGlobalStyle, ThemeProvider } from "styled-components";
import { RecoilRoot } from "recoil";
import Layout from "../components/Layout";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider>
        <Layout>
          <RecoilRoot>
            <Component {...pageProps} />
          </RecoilRoot>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
