import Image from "next/image";

const notFound = () => {
  return (
    <div className="flex justify-center items-center m-7 shadow-2xl rounded-t-2xl rounded-br-2xl bg-white">
      <Image
        src="/assets/coming-soon.jpg"
        // src="/assets/under-construction.jpg"
        alt="under-contruction"
        width={500}
        height={500}
        className="object-cover opacity-70 w-fit min-h-fit"
      />
    </div>
  );
};

export default notFound;
