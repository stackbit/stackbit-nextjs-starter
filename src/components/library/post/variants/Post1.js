import React from 'react';

const Post1 = (props) => {
  const { fields } = props;
  return (
    <div className="relative py-16">
      <h1 className="text-4xl md:text-6xl tracking-tight font-extrabold text-gray-900">
        {fields.heading}
      </h1>
      <p className="mt-3 mb-3 text-base md:text-2xl text-gray-500">
        {fields.subHeading}
      </p>
      {fields.image && (
        <div className="flex flex-col z-10 w-full md:w-1/2">
          <img
            alt={fields.title}
            width="1600"
            height="900"
            src={fields.image}
            className="shadow-lg rounded"
          />
        </div>
      )}
    </div>
  );
};

export default Post1;
