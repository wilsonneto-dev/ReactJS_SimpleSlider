import React from "react";

import data from "./data.fake";

import styles from "./styles.module.css";
import SimpleSlider from "../../lib/SimpleSlider";

const Home: React.FC = () => (
  <>
    {data.map((list, index) => (
      <section key={index} className={styles.list}>
        <header>
          <h1>{`Lista ${index}`}</h1>
        </header>

        <SimpleSlider>
          <div className="listWrapper">
            <ul>
              {list.map((media) => (
                <li key={media.Id}>
                  <img src={media.Images[0].Url} alt={media.FullTitle} />
                </li>
              ))}
            </ul>
          </div>
        </SimpleSlider>
      </section>
    ))}
  </>
);

export default Home;
