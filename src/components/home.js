import Card from "./contact.js";
import axios from "axios/dist/axios";
import { useState, useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import { ThreeDots } from "react-loader-spinner";
import "./login.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const [data, setdata] = useState([]);
  const [num, setnum] = useState(20);
  const [load, setloading] = useState(null);

  const navigation = useNavigate();

  useEffect(() => {
    axios.get(`https://randomuser.me/api/?results=${num}`).then((res) => {
      setdata([...data, ...res.data.results]);
      setloading(!null);
    });
  }, [num]);

  window.onscroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setnum(num + 20);
      setloading(null);
    }
  };

  const action = () => {
    navigation("/");
  };

  const contents = (
    <div className="contents">
      {data.length > 0 &&
        data.map((key, ind) => (
          <Card
            title={key.name.first + " " + key.name.last}
            address={key.location.city}
            image={key.picture.thumbnail}
          />
        ))}
    </div>
  );

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={!load}
      >
        <ThreeDots />
      </Backdrop>

      <div>
        <div className="Navbar">
          <button onClick={action}>Logout</button>
        </div>
        {contents}
      </div>
    </div>
  );
}

export default Home;
