import React from 'react';
import Image from 'next/image';

const Section = (props) => {
  const { classes } = props.section;
  const { backgroundImage } = props.section;
  return (
    <section className="section overflow-hidden relative border border-dashed border-blue-500">
      {backgroundImage && (
        <div className="absolute z-0 w-full">
          <Image width="3200" height="1800" src={backgroundImage} />
        </div>
      )}
      <div className={`p-5 md:p-8 lg:p-10 ${classes}`}>
        <div className="container mx-auto">{props.children}</div>
      </div>
    </section>
  );
};

export default Section;
