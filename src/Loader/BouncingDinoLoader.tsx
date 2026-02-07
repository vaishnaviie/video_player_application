import logo from "../assets/logo.png";

const BouncingDinoLoader = ({ size = 64 }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <img
        src={logo}
        alt="Dino Loader"
        style={{ width: size, height: size }}
        className="mb-4"
      />

      {/* The three bouncing dots */}
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default BouncingDinoLoader;
