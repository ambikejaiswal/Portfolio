import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray/60 text-center py-6 border-t border-gray-800">
      <p className="text-gray-400 mb-4">© {new Date().getFullYear()} Ambike Jaiswal. All rights reserved.</p>
      <div className="flex justify-center gap-6 text-white text-xl">
        <a href="mailto:ambikejaiswal@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </a>
        <a href="https://github.com/ambikejaiswal" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/ambikejaiswal/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
