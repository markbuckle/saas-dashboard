const Footer = () => {
  return (
    <footer className="mb-3 mt-24 border-t flex flex-col w-full p-4">
      <p className="text-gray-800">&copy; 2024 Company, Inc.</p>
      <div className="flex justify-center cursor-pointer">
        <a href="https://github.com/markbuckle?tab=repositories&q=saas&type=&language=&sort=" className="text-blue-400 text-lg font-bold hover:text-blue-500 hover:underline">Source Code &lt;/&gt;</a>
      </div>
    </footer>
  );
};

export default Footer;