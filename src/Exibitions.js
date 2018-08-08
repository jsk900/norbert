import React from "react";
import Header from "./Header";
import "./css/exibitions.css";

const Exibitions = () => (
  <div className="exibitions">
    <div className="clip4" />
    <Header />
    <div className="paragraphs">
      <p>
        <span>2018</span>Menzsen Gallery, Berlin, Germany / New York, USA
      </p>
      <p>
        <span>2015</span>Kastenmeiers im Kurländer Palais, Dresden, Germany
      </p>
      <p id="indent">BBBank - Filiale am Hausvogteiplatz, Berlin, Germany</p>

      <p>
        <span>2013</span>Menzsen Gallery, Berlin, Germany
      </p>

      <p>
        <span>2012</span>CUBIESEUM Art Gallery (CAGB), Berlin, Germany
      </p>

      <p>
        <span>2011</span>Gallery MZN, Berlin, Germany
      </p>

      <p>
        <span>2010</span>Fine Art Gallery, Boston, Massachusetts, USA
      </p>

      <p>
        <span>2009</span>Ezair Gallery, New York, USA
      </p>
      <p id="indent">Eveline Luppi Gallery, Rhode Island, USA</p>
      <p id="indent">Florence Art Biennale ́09, Florence, Italy</p>

      <p>
        <span>2008</span>Eveline Luppi Gallery, Rhode Island, USA
      </p>

      <p>
        <span>2007</span>World Fine Art Gallery, New York, USA
      </p>

      <p>
        <span>2006</span>Consulate General of Germany, New York, USA
      </p>

      <p>
        <span>2003</span>abc-Kunstservice Gallery, Berlin, Germany
      </p>

      <p>
        <span>2002</span>Springer Gallery, Berlin, Germany
      </p>
      <p id="indent">Palazzo Farnese, Berlin, Germany</p>
      <p id="indent">Remmco International Gallery, Germany</p>
      <p id="indent">Postbaht fair, Berlin, Germany</p>
      <p>
        <span>2001</span>Get Real Art Gallery, New York, USA
      </p>
      <p id="indent">Exotic Art Gallery, Berlin, Germany</p>
      <p id="indent">Borkenhagen Gallery, Germany</p>

      <p>
        <span>2000</span>Technology Center for Traffic, Hennigsdorf, Germany
      </p>
      <p id="indent">W-E-Art Espace Austerlitz, Paris, France</p>
      <p id="indent">G Art Gallery, New York, USA</p>
      <p id="indent">Amos Eno Gallery, New York, USA</p>

      <p>
        <span>1998</span>Kempinsky Plaza Hotel, Berlin, Germany
      </p>
      <p id="indent">Inter-Continental Hotel, Los Angeles, USA</p>
      <p id="indent">Gallery Berlin, Germany</p>
      <p id="indent">lemm Gallery, Berlin, Germany</p>
      <p id="indent">Miro Gallery, Karlsruhe, Germany</p>

      <p>
        <span>1997</span>Integra Gallery, Berlin, Germany
      </p>

      <p>
        <span>1994</span>Zeche "Carl" Gallery, Essen, Germany
      </p>
      <img src={require("./images/exibitions.jpg")} />
    </div>
  </div>
);
export default Exibitions;
