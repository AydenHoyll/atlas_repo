import { Layout } from "antd";
import { SideMenu } from "./components/sideMenu";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";

const { Header, Content } = Layout;

const App = () => {
  return (
    <Layout className="layout">
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
    </Layout>
  );
};
export default App;
