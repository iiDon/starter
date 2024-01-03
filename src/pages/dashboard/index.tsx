import { useTranslation } from "react-i18next";
function App() {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t("name")}</h1>
    </>
  );
}

export default App;
