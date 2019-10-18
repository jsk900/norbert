import React from 'react';
import { Header } from './Header';
import './css/about.css';

export const About = () => (
  <div className="about">
    <Header />

    <div className="grid">
      <h4>Surreal, abstract and figurative</h4>

      <p>
        ...are just a few words that can be used to describe the artwork of
        Norbert Karraß. Hailing from Berlin, Germany, this artist has found his
        footing in the New York art scene and his work is becoming recognized
        around the world.
      </p>

      <p>
        Prior to moving to New York and before becoming a painter, Karraß was a
        professional pilot and airship-captain but now spends his time devoted
        to his unbridled talent...
      </p>

      <p>
        ...His work celebrates the contradictions of existence, the endless
        mysterious power of life and death; the brightness and darkness; the
        serene and the chaotic; the spiritual and the diabolic.
      </p>

      <p>
        Much of his painting is allegorical, one thing symbolizing another, as
        in a scene of decadent festivities on the brink of apocalypse; or
        city-scapes of thronging crowds that appear to be disorganized, yet have
        subliminal order. Karraß is currently living between New York, USA and
        Berlin, Germany.
      </p>
      <div className="image"></div>
    </div>
  </div>
);
