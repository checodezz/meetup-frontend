import { useEffect, useState } from "react";
import useFetch from "../useFetch";
import * as Icon from "react-bootstrap-icons";
import { format } from "date-fns";

const EventCard = () => {
  const { data, loading, error } = useFetch("http://localhost:3000/event");

  const [listOfEvents, setListOfEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    if (data && data.events.length > 0) {
      setListOfEvents(data.events);
      setFilteredEvents(data.events);
    }
  }, [data]);

  const formatDate = (dateString) => {
    return format(new Date(dateString), "MMMM d, yyyy h:mm a");
  };

  const handleEventChange = (e) => {
    const { value } = e.target;
    if (value === "all") {
      setFilteredEvents(listOfEvents);
    } else {
      setFilteredEvents(
        listOfEvents.filter((event) => event.eventType === value)
      );
    }
  };

  const handleSearchbar = (e) => {
    const { value } = e.target;
    setSearchText(value);
    searchText.length === 0
      ? setFilteredEvents(listOfEvents)
      : setFilteredEvents(
          listOfEvents.filter(
            (event) =>
              event.title.toLowerCase().includes(value.toLowerCase()) ||
              event.eventTags
                .join(", ")
                .toLowerCase()
                .includes(value.toLowerCase())
          )
        );
  };
  return (
    <div className="container my-4">
      <div className="row align-items-center justify-content-between">
        <div className="col-md-4">
          <h1>Meetup Events</h1>
        </div>
        <div className="col-md-5 d-flex justify-content-end float-end">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search event by title and tags"
            aria-label="Search"
            value={searchText}
            onChange={handleSearchbar}
          />
          <select className="form-select" onChange={handleEventChange}>
            <option value="all">Select Event Type</option>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
          </select>
        </div>
      </div>

      <div className="row">
        {filteredEvents?.map((event) => {
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
