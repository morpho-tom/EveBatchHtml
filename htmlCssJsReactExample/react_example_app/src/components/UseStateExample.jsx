import { useState } from "react";

const UseSateExample = () => {
    const [value , setValue ] = useState()

    

    

//   let value = 1;

//  const add = () =>  {
//     setValue(55);

//     console.log(value);
//   }

  return (
    <>
      <div>count :{value}</div>
      <button >add</button>
    </>
  );
};

export default UseSateExample;
