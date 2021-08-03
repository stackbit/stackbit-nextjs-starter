import React from 'react';
import Image from 'next/image';

const Partners1 = (props) => {
  const { fields } = props;
  return (
    <div className="grid grid-cols-2 md: grid-cols-3 xl:grid-cols-6">
      {fields.partners.map((partner, index) => (
        <div key={index} className="flex justify-center mb-2">
          <Image
            src={partner.image}
            alt={partner.name}
            height={36}
            width={84}
          />
        </div>
      ))}
    </div>
  );
};
export default Partners1;
