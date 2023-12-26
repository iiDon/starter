import imgUrl from "@/assets/Logo/Nairobi-colored.svg";

const Logo = () => {
  return (
    <>
      <img className=" w-36 m-auto" src={imgUrl} alt="logo" />
      <div className="my-4">
        <hr />
      </div>
    </>
  );
};

export default Logo;
