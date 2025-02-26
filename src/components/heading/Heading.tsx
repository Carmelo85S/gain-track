import { HeadingProps } from "../../types/headingProps";

const Heading: React.FC<HeadingProps> = ({
  labelH1,
  labelH2
}) => {
    
  return (
    <>
        <h1
        className="text-center text-white text-5xl font-bold mx-auto w-5/6 tracking-widest"
    
        >
        {labelH1}
        </h1>
        <h2 className='text-center font-bold mx-auto w-full h-16 flex justify-center items-center bg-primary-100 text-black my-5 text-4xl tracking-wide'>
            {labelH2}
        </h2>
    </>
  );
};

export default Heading;

