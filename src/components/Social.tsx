import React from 'react';

export default function Social() {
  const socialLinks = [
    "https://www.instagram.com/reel/ClEHkvVARNT/",
    "https://www.instagram.com/p/DJ_4yCfzQg5/",
    "https://www.instagram.com/p/DBxtnXFygqM/",
    "https://www.instagram.com/p/C_yCciuSJLr/",
    "https://www.instagram.com/p/C-dAtjzyLwX/",
    "https://www.instagram.com/p/DMUbZGySykX/",
    "https://www.instagram.com/p/DKhR7Giy7K1/",
    "https://www.instagram.com/p/Ckvcq0kLaND/?hl=en&img_index=1",
    "https://www.instagram.com/p/CkQXwCQBRf5/?hl=en",
    "https://www.instagram.com/p/CmOtdiUyOP-/?hl=en"
  ];

  return (
    <section id="social" className="py-24 px-6 bg-[#f5f3ed] border-t border-[#e0ddd5]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-light text-[#3d3d3d] mb-8">
          Socials
        </h2>
        <p className="text-lg text-[#6b6b6b] mb-12 max-w-2xl mx-auto">
          A few of my favourite social sparks - creative snippets that are LIVE on Instagram.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-left">
          {socialLinks.map((url, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <p className="text-[#3d3d3d] font-medium mb-2">#{index + 1}</p>
              <p className="text-[#6b6b6b] text-sm truncate">{url}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
