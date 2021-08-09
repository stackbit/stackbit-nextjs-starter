import React from 'react';

const Hero3 = (props) => {
  const { fields } = props;
  return (
    <div className="relative py-16">
      <div className="mx-auto flex flex-col justify-center text-center w-5/6">
        <h1 className="text-4xl md:text-6xl tracking-tight font-extrabold text-gray-900">
          {fields.heading}
        </h1>
        <p className="mt-3 mb-3 text-base md:text-2xl text-gray-500">
          {fields.subHeading}
        </p>
        {fields.buttons.map((button, index) => (
          <a className="" key={index} href={button.url}>
            {button.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Hero3;
