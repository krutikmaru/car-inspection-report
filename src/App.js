import CarInspectionForm from "./components/CarInspectionForm/CarInspectionForm";
import { ApplicationManagerProvider } from "./contexts/ApplicationContext";
import Layout from "./layout/Layout";
// import CarInspectionReport from "./pages/CarInspectionReport";

function App() {
  return (
    <ApplicationManagerProvider>
      <Layout>
        <CarInspectionForm />
      </Layout>
    </ApplicationManagerProvider>
  );
}

export default App;
