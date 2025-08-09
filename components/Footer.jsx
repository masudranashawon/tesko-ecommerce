const Footer = () => {
  return (
    <footer className="mt-6 bg-gray-800 py-4 text-gray-200">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} Tesko. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
