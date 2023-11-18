import { ApplicationManagerProvider } from "./contexts/ApplicationContext";
import Layout from "./layout/Layout";
import CarInspectionReport from "./pages/CarInspectionReport";

function App() {
  return (
    <ApplicationManagerProvider>
      <Layout>
        <CarInspectionReport />
      </Layout>
    </ApplicationManagerProvider>
  );
}

export default App;
