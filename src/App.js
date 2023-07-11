import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import SiriImage from "./images/siri.png";
import CortanaImage from "./images/cortana.png";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div class="hero-body">
          <p className="title">Personal Digital Assistance</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              {" "}
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                image={AlexaImage}
                description="Alexa is created by Amazon and helps you buy things."
              />
            </div>
            <div className="column is-4">
              {" "}
              <ProfileCard
                title="Cortana"
                handle="@cortana"
                image={SiriImage}
                description="Microsoft made Cortana and they know what it does"
              />
            </div>
            <div className="column is-4">
              {" "}
              <ProfileCard
                title="Siri"
                handle="@siri01"
                image={CortanaImage}
                description="Siri was made by Apple and is being phase out"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
