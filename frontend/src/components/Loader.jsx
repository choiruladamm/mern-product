import { MutatingDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="grid h-screen place-items-center">
      <MutatingDots
        height="100"
        width="100"
        color="#202226"
        secondaryColor="#202226"
        radius="9.5"
        ariaLabel="mutating-dots-loading"
        visible={true}
      />
    </div>
  );
};

export default Loader;
