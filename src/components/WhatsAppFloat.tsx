import { useState } from "react";

const WHATSAPP_NUMBER = "447432799968";
const WHATSAPP_MESSAGE = "Hello! I'm interested in AppworX services. Could you please provide more information?";

const WhatsAppFloat = () => {
  const [hovered, setHovered] = useState(false);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div className="fixed bottom-24 right-5 z-50 flex items-center gap-3">

      {/* Tooltip label */}
      <div
        className={`bg-card border border-border text-foreground text-xs font-medium px-3 py-2 rounded-xl shadow-lg whitespace-nowrap transition-all duration-300 ${
          hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"
        }`}
      >
        Chat with us on WhatsApp
      </div>

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label="Chat with us on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
        style={{ backgroundColor: "#25D366" }}
      >
        {/* Ping animation ring */}
        <span
          className="absolute inline-flex w-full h-full rounded-full opacity-40 animate-ping"
          style={{ backgroundColor: "#25D366" }}
        />

        {/* WhatsApp SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-7 h-7 relative z-10"
          fill="white"
        >
          <path d="M16.003 2.667C8.636 2.667 2.667 8.636 2.667 16c0 2.363.632 4.607 1.73 6.557L2.667 29.333l6.98-1.696A13.267 13.267 0 0 0 16.003 29.333C23.37 29.333 29.333 23.364 29.333 16S23.37 2.667 16.003 2.667zm0 2.4c5.99 0 10.93 4.94 10.93 10.933S22 26.933 16.003 26.933a10.9 10.9 0 0 1-5.563-1.527l-.398-.24-4.14 1.006 1.04-3.987-.265-.413A10.893 10.893 0 0 1 5.07 16c0-5.993 4.94-10.933 10.933-10.933zm-3.29 5.2c-.207 0-.543.077-.828.386-.284.31-1.083 1.058-1.083 2.58 0 1.52 1.108 2.993 1.263 3.2.154.207 2.16 3.437 5.3 4.68 2.623 1.034 3.157.829 3.726.777.568-.052 1.833-.749 2.092-1.472.258-.723.258-1.343.181-1.473-.077-.13-.284-.207-.594-.362-.31-.155-1.833-.904-2.117-1.007-.284-.103-.49-.155-.697.155-.206.31-.8.981-.98 1.188-.181.207-.362.232-.671.078-.31-.155-1.308-.482-2.491-1.537-.92-.82-1.54-1.832-1.72-2.142-.181-.31-.02-.477.136-.631.14-.139.31-.362.465-.543.154-.181.206-.31.31-.516.103-.207.051-.388-.026-.543-.078-.155-.68-1.683-.946-2.298-.247-.593-.502-.51-.697-.52l-.594-.01z" />
        </svg>
      </a>
    </div>
  );
};

export default WhatsAppFloat;