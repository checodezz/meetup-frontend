import { useParams } from "react-router-dom";
import Header from "../components/Header";
import useFetch from "../useFetch";
import { format, isValid } from "date-fns";
import { Clock, GeoAlt, CurrencyRupee } from "react-bootstrap-icons";
import Footer from "../components/Footer";

const EventDetails = () => {
  const { eventId } = useParams();

  const { data, error, loading } = useFetch(
    `http://localhost:3000/event/${eventId}`
  );

  const event = data?.event;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return isValid(date) ? format(date, "EEEE, MMMM d, yyyy") : "Invalid Date";
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return isValid(date) ? format(date, "h:mm a") : "Invalid Time";
  };

  return (
    <div>
      <Header />
      <hr style={{ color: "gray", marginTop: "3px" }} />
      <div className="container mt-3">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {event && (
          <div className="pb-3">
            <h2 className="fw-bold text-black">{event.title}</h2>
            <div className="d-flex align-items-center mt-3">
              <img
                src={event.speakers?.[0]?.image}
                alt=""
                className="img-fluid"
                style={{ height: "50px", width: "50px", borderRadius: "50%" }}
              />
              <div className="ml-3 ps-3">
                <p className="mb-0">Hosted By</p>
                <p className="mb-0 fw-semibold">{event.speakers?.[0]?.name}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <hr style={{ color: "gray", marginTop: "3px", marginBottom: "0px" }} />
      <div style={{ backgroundColor: "#F6F7F8" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 pe-5">
              <img
                src={event?.eventThumbnail}
                alt=""
                className="img-fluid mt-5 rounded"
                style={{ height: "350px", width: "100%", objectFit: "cover" }}
              />
              <div className="mt-3">
                <h4 className="text-black">Details</h4>
                <p>{event?.eventDescription}</p>
              </div>
              <div className="pt-3">
                <h5>Evnt Tags :</h5>
                {event?.eventTags.map((tag) => (
                  <button key={tag} className="btn btn-danger m-4">
                    {tag}
                  </button>
                ))}
              </div>
            </div>
            <div className="col-md-4 ps-5 mt-5">
              <div
                className=" p-3 rounded"
                style={{ backgroundColor: "white" }}
              >
                <div className="mb-3 d-flex align-items-center">
                  <Clock className="me-2" size={20} />
                  <div>
                    <p className="mb-0">{formatDate(event?.eventStartTime)}</p>
                    <p className="mb-0">
                      {formatTime(event?.eventStartTime)} to{" "}
                      {formatTime(event?.eventEndTime)} IST
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <GeoAlt className="me-2" size={20} />
                  <div>
                    <p className="mb-0">{event?.location}</p>
                    <p className="mb-0">{event?.address}</p>
                  </div>
                </div>
                <div className="text-center">
                  <img
                    src="https://maps-googleapis.meetup.com/maps/api/staticmap?center=12.935211%2C%2077.61689&zoom=17&size=480x300&format=png&scale=1&key=AIzaSyBhcQiQISkjMBwLAugJj8V78nMPfitnr44&markers=icon%3Ahttps%3A%2F%2Fsecure.meetupstatic.com%2Fnext%2Fimages%2Fevent%2Fmup-custom-google-map-pin.png%7Ccolor%3A0xF65858%7C12.935211%2C%2077.61689"
                    alt=""
                    className="img-fluid p-0 m-0"
                    style={{ width: "100%", objectFit: "cover" }}
                  />
                </div>
                <div className="d-flex align-items-center pt-3">
                  <CurrencyRupee className="me-2" size={20} />{" "}
                  <div>
                    <p className="m-2">{event?.price}</p>
                  </div>
                </div>
                <div className="mt-3">
                  <h5 className="text-black">Additional Information:</h5>
                  <p>
                    Dress Code: {event?.additionalInformation?.dressCode}
                    <br />
                    Age Restrictions:{" "}
                    {event?.additionalInformation?.ageRestrictions}
                  </p>
                  <div className="text-center pt-2">
                    <button className="btn btn-danger px-5">RSVP</button>
                  </div>
                </div>
              </div>
              <div className="row mt-3 container">
                <div className="col-12">
                  <h3 className="mb-3">Speakers</h3>
                </div>
                {event?.speakers.map((speaker, index) => (
                  <div
                    key={index}
                    className="col-md-6 mb-3"
                    style={{ paddingLeft: "5px", paddingRight: "5px" }}
                  >
                    <div className="card h-100">
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="card-img-top"
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                      <div className="card-body">
                        <h5 className="card-title fw-bold">{speaker.name}</h5>
                        <p className="card-text">{speaker.designation}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventDetails;
