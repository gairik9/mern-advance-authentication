const Input = ({ icon: Icon, ...props }) => {
  return (
    <div className="relative mb-6 flex items-center gap-4 border border-gray-500 bg-gray-900 px-5 py-2.5 text-gray-400 rounded-md hover:border-white">
      <div className="pointer-events-none">
        <Icon className="size-8 text-white font-bold" />
      </div>
      <input
        {...props}
        className="w-full placeholder-gray-400/70 bg-transparent text-2xl outline-none"
      />
    </div>
  );
};

export default Input;
