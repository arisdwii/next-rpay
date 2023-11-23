export const LayerTransaksi = ({ title, desc }) => {
  return (
    <div className="w-full flex flex-wrap items-start justify-between">
      <div className="w-1/2">
        <p className="opacity-80">{title}</p>
      </div>
      <div className="w-1/2 flex items-center gap-1">
        <div className="flex items-start gap-1">
          <p>:</p>
          <p className="text-black font-semibold dark:text-putih/95">{desc}</p>
        </div>
      </div>
    </div>
  );
};
