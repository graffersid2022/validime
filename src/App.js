import "./App.css";

function App() {
  return (
    <div className="App">
      <header class="main-header">
        <div class="logo">
          <a href="/">
            <img
              src={process.env.PUBLIC_URL + `/assets/images/logo.png`}
              className="App-logo"
              alt="logo"
            />
          </a>
        </div>
        <nav class="desktop-main-menu">
          <ul>
            <li>
              <a href="falcon9.html">Login</a>
            </li>
            <li>
              <a href="falcon-heavy.html">SIGN UP</a>
            </li>
          </ul>
        </nav>
      </header>

      <section>
        <div class="section-inner">
          <img
            src={process.env.PUBLIC_URL + `/assets/images/newidea.png`}
            // className="App-logo"
            width="738px"
            height="286px"
            alt="logo"
          />
          <p className="small-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor at
            ut tincidunt elementum enim.{" "}
          </p>
          <button className="large-button">
            <span>Share Idea</span>
          </button>
        </div>
      </section>

      <section
        style={{ display: "flex", flexDirection: "row", height: "90vh" }}
      >
        <div class="section-b">
          <img
            src={process.env.PUBLIC_URL + `/assets/images/image1.png`}
            // className="App-logo"
            width="580.5px"
            height="546px"
            alt="image1"
          />
        </div>
        <div className="center-text">
          <h1>
            What is <span style={{ color: "#F68452" }}>Validi.me?</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor at
            ut tincidunt elementum enim. Facilisis posuere ornare tempor eros
            laoreet arcu sed. Sit sed id urna feugiat ut sit viverra quam. Ac,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor at
            ut tincidunt elementum enim. Facilisis posuere ornare tempor eros
            laoreet arcu sed. Sit sed id urna feugiat ut sit viverra quam. Ac...
            <br />
            <span style={{ color: "#F68452" }}>Read More.</span>
          </p>
        </div>
      </section>
      <section style={{ height: "auto" }}>
        <div className="section-c-header" style={{ textAlign: "center" }}>
          <h1>
            HOW <br />
            VALIDI.ME <span style={{ color: "#F68452" }}>WORKS</span>
          </h1>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div class="section-c">
            <img
              src={process.env.PUBLIC_URL + `/assets/images/image2.png`}
              // className="App-logo"
              width="481.57px"
              height="231.03px"
              alt="image2"
            />
          </div>
          <div
            className="center-text"
            style={{ top: 0, marginLeft: "4.574rem" }}
          >
            <h1
              style={{
                color: "#F68452",
                letterSpacing: "0.08em",
                marginBottom: 0,
              }}
            >
              Create Profile
            </h1>
            <p style={{ marginTop: "0.25rem" }}>
              We ask you 5-6 questions which helps us understand your
              background.
            </p>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className="center-text" style={{ left: "10.80rem" }}>
            <h1
              style={{
                marginBottom: "0",
                color: "#F68452",
                letterSpacing: "0.08em",
              }}
            >
              Collect 10+ points.
            </h1>
            <br />
            <h1
              style={{
                marginTop: "0",
                color: "#F68452",
                letterSpacing: "0.08em",
              }}
            >
              {" "}
              to publish your idea
            </h1>
            <p>
              You can publish your idea and get it validated from the specific
              target <br /> audience on the platform without any reachouts or
              cold mailing
            </p>
          </div>
          <div class="section-c" style={{ left: "8.48rem" }}>
            <img
              src={process.env.PUBLIC_URL + `/assets/images/image3.png`}
              // className="App-logo"
              width="410.63px"
              height="481.83px"
              alt="image3"
            />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div class="section-c">
            <img
              src={process.env.PUBLIC_URL + `/assets/images/image4.png`}
              // className="App-logo"
              width="546px"
              height="546px"
              alt="image4"
            />
          </div>
          <div className="center-text" style={{ marginLeft: "2.574rem" }}>
            <h1
              style={{
                color: "#F68452",
                letterSpacing: "0.08em",
                marginBottom: 0,
              }}
            >
              Collect Points, Curated <br /> Start up ideas which you <br /> can
              help validate
            </h1>
            <p style={{ marginTop: "0.25rem" }}>
              You get +5 Points for each idea you validate. Based on your
              profile info we match you to the target audience criteria of the
              published idea which you can help in validating.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
