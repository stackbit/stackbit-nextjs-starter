import React from 'react';

const Hero7 = (props) => {
  const { fields } = props;
  return (
    <div className="relative py-16">
      <div className="relative">
        <h1 className="text-4xl md:text-6xl tracking-tight font-extrabold text-gray-900">{fields.heading}</h1>
      </div>
      <div className="w-full md:w-1/2">
        <p className="mt-3 mb-3 text-base md:text-2xl text-gray-500">{fields.subHeading}</p>
        {fields.buttons.length > 0 && (
          <div className="py-4">
            {fields.buttons.map((button, index) => (
              <a key={index} className="bg-primary text-white py-4 px-10 rounded-full" href={button.url}>
                {button.text}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero7;
