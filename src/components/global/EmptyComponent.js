import React from 'react';

const EmptyComponent = (props) => {
  const { id, variant, dataSource } = props;
  return (
    <div className="relative py-16">
      <div className="flex justify-center align-middle">
        <div className="flex flex-col">
          <h2 className="text-1xl md:text-2xl tracking-tight font-extrabold text-gray-900 mb-2">
            Component Not Found
          </h2>
          <h3 className="text-xs">
            <span className="font-bold">Component: </span>
            <span className="font-mono">
              {id}/{variant}
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default EmptyComponent;
