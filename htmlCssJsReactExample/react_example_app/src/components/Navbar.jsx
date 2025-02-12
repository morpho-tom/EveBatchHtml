import image from "../assets/image/sony1.jpg";

const Navbar = () => {
  return (
    <div>
      <img src={image} alt="" />
      <ul>
        <li>Home</li>
        <li>About</li>
      </ul>
    </div>
  );
};

export default  Navbar ;
