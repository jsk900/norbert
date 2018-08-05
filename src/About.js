import React from "react";
import Header from "./Header";
import "./css/about.css";

const About = () => (
  <div className="about">
    <div className="clip5" />
    <Header />

    <div className="grid">
      <h4>Surreal, abstract and figurative</h4>
      <img src={require("./images/kopf2.fw.png")} />
      <p>
        ...are just few words that can be used to describe the artwork of
        Norbert Karrass.Hailing from Berlin, Germany, this artist has found his
        footing in the New York art scene and his work is becoming recognised
        around the world.
      </p>

      <img src={require("./images/flugzeug.fw.png")} />
      <p>
        Prior to moving to New York and before becoming a painter, Karrass was a
        professional pilot and airship-captain but now spends his time devoted
        to his unbridled talent...
      </p>

      <img src={require("./images/kopf.fw.png")} />
      <p>
        ...His work celebrates the contradictions of existence, the endless
        mysterious power of life and death; the brightness and darkness; the
        serene and the chaotic; the spiritual and the diabolic.
      </p>

      <img src={require("./images/stadt.fw.png")} />
      <p>
        Much of his painting is allegorical, one thing symbolizing another, as
        in a scene of decadent festivities on the brink of apocalypse; or
        cityscapes of thronging crowds that appear to be disorganized, yet have
        subliminal order. Karrass is currently living between New York, USA and
        Berlin, Germany.
      </p>
    </div>
  </div>
);
export default About;
