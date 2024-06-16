const Hero = () => {
  return (
    <div className="container row p-5 m-5">
      <div className="mb-1 col-md-8 px-5 container">
        <h1 className="fw-bold  display-5 pb-3">
          The people platform—Where interests become friendships
        </h1>
        <p className="fs-5 text-body-secondary">
          Whatever your interest, from hiking and reading to networking and
          skill sharing, there are thousands of people who share it on Meetup.
          Events are happening every day—sign up to join the fun.
        </p>
        <button className="btn text-light" style={{ background: "#00798a" }}>
          Join Meetup
        </button>
      </div>
      <div className="col-md-4 container">
        <img
          src="https://secure.meetupstatic.com/next/images/indexPage/irl_event.svg?w=384"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
