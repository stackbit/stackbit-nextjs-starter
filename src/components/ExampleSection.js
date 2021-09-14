import React from 'react';

const ExampleSection = (props) => {
    const { logos, title } = props;
    return (
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-14 lg:py-20 mt-10 mb-10 text-center">
            <h1 className="text-3xl tracking-tight sm:text-4xl mb-2">{title}</h1>
            <div className="flex justify-center items-center">
                {logos.map((logo, index) => (
                    <div className="p-6" key={index}>
                        <img className="mb-2" height="60px" width="60px" src={logo.image} />
                        <h2 className="text-sm text-gray-400">{logo.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExampleSection;
