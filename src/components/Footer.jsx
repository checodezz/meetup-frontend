const Footer = () => {
  return (
    <div className="pt-4 pb-2" style={{ backgroundColor: "white" }}>
      <footer className="text-center">
        <p>&copy; Meetup App {new Date().getFullYear()} All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
