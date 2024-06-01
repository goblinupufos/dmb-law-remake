import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-icons.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Client Multumit</h3>
                </div>
              </div>
              <p>
                Cea mai top firma cu cele mai sexy gagici buna seara doamna
                lavinia ma scuzati ca va deranjez cand ne dati si noua banii pe
                concediu Cea mai top firma cu cele mai sexy gagici buna seara
                doamna lavinia ma scuzati ca va deranjez cand ne dati si noua
                banii pe concediu Cea mai top firma cu cele mai sexy gagici buna
                seara doamna lavinia ma scuzati ca va deranjez cand ne dati si
                noua banii pe concediu
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Client Multumit</h3>
                </div>
              </div>
              <p>
                Cea mai top firma cu cele mai sexy gagici buna seara doamna
                lavinia ma scuzati ca va deranjez cand ne dati si noua banii pe
                concediu Cea mai top firma cu cele mai sexy gagici buna seara
                doamna lavinia ma scuzati ca va deranjez cand ne dati si noua
                banii pe concediu Cea mai top firma cu cele mai sexy gagici buna
                seara doamna lavinia ma scuzati ca va deranjez cand ne dati si
                noua banii pe concediu
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Client Multumit</h3>
                </div>
              </div>
              <p>
                Cea mai top firma cu cele mai sexy gagici buna seara doamna
                lavinia ma scuzati ca va deranjez cand ne dati si noua banii pe
                concediu Cea mai top firma cu cele mai sexy gagici buna seara
                doamna lavinia ma scuzati ca va deranjez cand ne dati si noua
                banii pe concediu Cea mai top firma cu cele mai sexy gagici buna
                seara doamna lavinia ma scuzati ca va deranjez cand ne dati si
                noua banii pe concediu
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Client Multumit</h3>
                </div>
              </div>
              <p>
                Cea mai top firma cu cele mai sexy gagici buna seara doamna
                lavinia ma scuzati ca va deranjez cand ne dati si noua banii pe
                concediu Cea mai top firma cu cele mai sexy gagici buna seara
                doamna lavinia ma scuzati ca va deranjez cand ne dati si noua
                banii pe concediu Cea mai top firma cu cele mai sexy gagici buna
                seara doamna lavinia ma scuzati ca va deranjez cand ne dati si
                noua banii pe concediu
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
