import { Layout } from "antd";
import { SideMenu } from "./components/sideMenu";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";

const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header className="text-white">
        <SideMenu />
      </Header>
      <Content className="bg-white p-5">
        <Routes>
          {ROUTES.map((props) => (
            <Route {...props} key={props.path} />
          ))}
        </Routes>
      </Content>
      <Footer></Footer>
    </Layout>
  );
};
export default App;
