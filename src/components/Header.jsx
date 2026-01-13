// import { FaDiscord, FaTwitter, FaInstagram, FaTwitch } from 'react-icons/fa';

// export default function Header() {
//   return (
//     <header className="h-[80px] w-full flex items-center bg-black text-[#4DA0C7]">
      
//       {/* Left Menu */}
//       <div className="w-1/3 flex justify-start space-x-8 text-xs font-light pl-[40px]  DrukWide">
//         <a href="#about-us" className="hover:underline">ABOUT US</a>
//         <a href="#team" className="hover:underline">TEAM</a>
//         <a href="#tournament" className="hover:underline">TOURNAMENT</a>
//         <a href="#shop" className="hover:underline">SHOP</a>
//       </div>

//       {/* Center Logo */}
//       <div className="w-1/3 flex justify-center items-center h-full">
//         <img src="/1X1.png" alt="Logo" className="h-[80px] w-auto" />
//       </div>

//       {/* Right Social Icons */}
//       <div className="w-1/3 flex justify-end space-x-8 text-xl pr-[40px]">
//         <a href="https://discord.com" target="_blank" rel="noopener noreferrer"><FaDiscord /></a>
//         <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
//         <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
//         <a href="https://twitch.tv" target="_blank" rel="noopener noreferrer"><FaTwitch /></a>
      
//       </div>
//     </header>
//   );
// }

import { Link, useNavigate } from 'react-router-dom'
import { FaDiscord, FaTwitter, FaInstagram, FaTwitch } from 'react-icons/fa';


export default function Header() {
 

  const handleTeamClick = () => {
    navigate("/#team");
  };

  return (
<header className="sticky top-0 z-50 h-[80px] w-full flex items-center bg-black text-[#4DA0C7]">
      {/* Left Menu */}
      <div className="w-1/3 flex justify-start space-x-8 text-xs font-light pl-[40px] DrukWide">
        <Link to="/about-us" className="hover:underline">ABOUT US</Link>
        <button onClick={handleTeamClick} className="hover:underline">TEAM</button>
        <a href="https://arrivalseven.printify.me/" target="_blank" rel="noopener noreferrer" className="hover:underline">SHOP</a>
      </div>

      {/* Center Logo */}
      <div className="w-1/3 flex justify-center items-center h-full">
        <Link to="/"><img src="/1X1.png" alt="Logo" className="h-[80px] w-auto" /></Link>
      </div>

      {/* Right Social Icons */}
      <div className="w-1/3 flex justify-end space-x-8 text-xl pr-[40px]">
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer"><FaDiscord /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://twitch.tv" target="_blank" rel="noopener noreferrer"><FaTwitch /></a>
      </div>
    </header>
  );
}

