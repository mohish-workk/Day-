import React from 'react';

const Polaroid = ({ image, caption, tilt = 'left' }) => {
    const tiltClass = tilt === 'left' ? 'polaroid-tilt-left' : 'polaroid-tilt-right';

    return (
        <div className={`flex flex-col items-center ${tiltClass} ${tilt === 'right' ? 'lg:mt-8' : ''}`}>
            <div className="bg-white p-4 shadow-xl rounded-sm border-b-4 border-r-4 border-slate-100">
                <div className="w-full aspect-square bg-slate-200 mb-4 overflow-hidden">
                    <img
                        alt={caption}
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        src={image}
                    />
                </div>
                <p className="font-script text-2xl text-center text-slate-600">{caption}</p>
            </div>
        </div>
    );
};

export default Polaroid;
