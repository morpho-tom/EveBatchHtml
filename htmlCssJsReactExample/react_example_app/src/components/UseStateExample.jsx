import { useState } from "react";

const UseSateExample = () => {
    const [value , setValue ] = useState()

    

    


 const add = () =>  {
    setValue(value + 1);

    console.log(value);
  }

  return (
    <>
      <div>count :{value}</div>
      <button button={add} >add</button>
    </>
  );
};

export default UseSateExample;
