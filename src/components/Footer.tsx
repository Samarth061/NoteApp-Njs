import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 p-4 text-center items-center text-white">
      <div className="max-w-6xl ml-[70px] flex justify-between items-center">
        <div className=" text-sm">
          <p>
            Created by <span className="font-semibold">Samarth Shah</span>
          </p>
        </div>
        <div>
          <p className="font-thin">
            Layout Inspired by{" "}
            <a
              href="https://www.spithacode.com/blog/nextjs-15-deep-dive-building-notes-app-advanced-features"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Blog
            </a>
          </p>
        </div>
        {/* Contact Information */}
        <div className="flex flex-row ">
          <a
            href="mailto:samarthdshah12@gmail.com"
            className="text-blue-400 hover:underline"
          >
            Email
          </a>
          <span className="mx-2">|</span>
          <a
            href="https://github.com/Samarth061"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            <FaGithub className="inline-block mr-1" /> GitHub
          </a>
          <span className="mx-2">|</span>
          <a
            href="https://www.linkedin.com/in/samarth-shah-319806224/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            <FaLinkedin className="inline-block mr-1" /> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
