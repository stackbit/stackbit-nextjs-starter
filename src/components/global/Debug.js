import React from 'react';

const Debug = (props) => {
  const { component } = props;
  return (
    <div className="debug absolute z-10 top-0 left-0 p-2 bg-red-400">
      <div className="mr-2">
        <h3 className="text-xs">
          <span className="font-bold">Component: </span>
          <span className="font-mono">
            {component.id}/{component.variant}
          </span>
        </h3>
        {component.dataSource && (
          <h3 className="text-xs">
            <span className="font-bold">Data: </span>
            <span className="font-mono">
              {component.dataSource.id}/{component.dataSource.type}
            </span>
          </h3>
        )}
      </div>
    </div>
  );
};

export default Debug;
