import imgUrl from "@/assets/error.svg";
import { Button } from "./components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className=" flex flex-col md:flex-row md:gap-x-36 h-screen w-full items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl md:text-8xl font-bold">404</h1>
        <p className="text-lg md:text-3xl mt-6">حدث خطأ ما!</p>
        <Button
          onClick={() => navigate(-1)}
          className="mt-4"
          variant={"default"}
          size={"lg"}
        >
          العودة للصفحة السابقة
        </Button>
      </div>
      <img className="md:w-1/3 w-1/2" src={imgUrl} alt="logo" />
    </div>
  );
};

export default Error;
