import React from "react";
import socialLinks from "../data/social";


const Social = () => {
  return (
    <>
      {/* Social Links */}
      <div className="hidden lg:flex flex-col gap-10 fixed left-20 bottom-6">
        {socialLinks.map(({ href, icon, name }) => (
          <a key={name} href={href} className="text-[#A8B2D1]" aria-label={name}>
            {icon}
          </a>
        ))}
      </div>

      {/* Email */}
      <div className="hidden lg:block fixed right-20 bottom-20 rotate-90 origin-bottom-right">
        <a href="mailto:oludamolaijimade@gmail.com" className="text-[#A8B2D1]">
          oludamolaijimade@gmail.com
        </a>
      </div>
    </>
  );
};

export default Social;
