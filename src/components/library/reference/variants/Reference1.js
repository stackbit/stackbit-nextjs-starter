import React from 'react';

const Reference1 = (props) => {
  const { fields } = props;
  console.log(fields);
  return (
    <div className="relative py-16">
      {fields.pageReferences.map((reference) => {
        return <div><a href={reference.page.url}>{reference.page.title}</a></div>

      })}
    </div>
  );
};

export default Reference1;
