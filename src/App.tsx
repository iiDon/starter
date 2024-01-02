import { useState } from "react";
import { Button } from "./components/ui/button";
import { useTranslation } from "react-i18next";
function App() {
  const [count, setCount] = useState(0);
  const { t } = useTranslation();

  return (
    <>
      <h1>{t("name")}</h1>
      <h1>Count: {count}</h1>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
      <Button onClick={() => setCount(count - 1)}>Decreement</Button>
    </>
  );
}

export default App;
