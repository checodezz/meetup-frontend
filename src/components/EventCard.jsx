import { useEffect, useState } from "react";
import useFetch from "../useFetch";
import * as Icon from "react-bootstrap-icons";
import { format } from "date-fns";

const EventCard = () => {
  const { data, loading, error } = useFetch("http://localhost:3000/event");

  const [listOfEvents, setListOfEvents] = useState([]);

  useEffect(() => {
    if (data && data.events.length > 0) {
      setListOfEvents(data.events);
    }
  }, [data]);

  const formatDate = (dateString) => {
    return format(new Date(dateString), "MMMM d, yyyy h:mm a");
  };

  return (
    <div className="container my-4">
      <div className="row align-items-center">
        <div className="col-md-10">
          <h1>Meetup Events</h1>
        </div>
        <div className="col-md-2 text-md-end">
          <select className="form-select">
            <option defaultValue>Select Event Type</option>
            <option value="offline">Online</option>
            <option value="online">Offline Type 2</option>
          </select>
        </div>
      </div>
      <div className="row">
        {listOfEvents?.map((event) => {
          return (
            <div className="col-md-3 mb-3" key={event._id}>
              <div className="card border-0 card-border">
                <img
                  src={event.eventThumbnail}
                  alt="event-image"
                  className="card-img event-thumbnail"
                />
                <div className="card-body">
                  <h5 className="card-title">{event.title}</h5>
                  <p className="card-text text-body-secondary fw-semibold fs-6 mb-2">
                    Hosted by: {event.hostedBy}
                  </p>
                  <p className="card-text mb-2">
                    <Icon.Calendar2
                      size={24}
                      className="text-body-tertiary mx-1"
                    />{" "}
                    {formatDate(event.eventStartTime)}
                  </p>
                  <p className="card-text mb-2">
                    <Icon.TicketPerforated
                      size={25}
                      className="text-body-tertiary mx-1"
                    />{" "}
                    {event.isPaid ? event.price : "Free"}/-
                  </p>
                  <p className="card-text">
                    <Icon.GeoAlt
                      size={25}
                      className="text-body-tertiary mx-1"
                    />
                    {event.location}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventCard;
