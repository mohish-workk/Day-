import React, { useState, useEffect } from 'react';

const Polaroid = ({ image, tilt = '0deg', warpY = '0deg', warpX = '0deg', objectPosition, sticker, rowIndex }) => {
    // Randomize sticker position if it exists
    const stickerPos = React.useMemo(() => {
        // First row (0) left, Second row (1) right, etc.
        const side = rowIndex % 2 === 0 ? 'left' : 'right';

        return {
            side,
            top: `${Math.floor(Math.random() * 50 + 15)}%`, // Keep in upper/middle area, away from bottom
            rotate: `${Math.floor(Math.random() * 40 - 20)}deg`
        };
    }, [rowIndex]);

    return (
        <div
            className="relative flex flex-col items-center group transition-all duration-300 mx-1 sm:mx-4"
            style={{
                transform: `rotate(${tilt})`,
                perspective: '1000px'
            }}
        >
            {/* Sticker */}
            {sticker && (
                <div
                    className="absolute z-50 w-8 h-8 md:w-10 md:h-10 pointer-events-none drop-shadow-md"
                    style={{
                        [stickerPos.side]: '-40px', // Consistent extreme offset
                        top: stickerPos.top,
                        transform: `rotate(${stickerPos.rotate})`,
                    }}
                >
                    <img src={sticker} alt="sticker" className="w-full h-full object-contain" />
                </div>
            )}

            {/* Wooden Clip */}
            <div className="absolute -top-7 w-2.5 h-8 bg-[#d2b48c] shadow-md rounded-sm z-30 border-t border-l border-[#8b4513]/30">
                <div className="absolute top-[18px] left-0 w-full h-px bg-[#8b4513]/30"></div>
            </div>

            {/* Polaroid Frame */}
            <div
                className="bg-[#fdfbf7] p-1.5 pb-6 shadow-[0_10px_20px_rgba(0,0,0,0.15)] w-28 sm:w-32 md:w-36 transition-all duration-500 group-hover:scale-110 group-hover:z-40 mt-1"
                style={{
                    transform: `rotateY(${warpY}) rotateX(${warpX})`,
                    borderRadius: '2px',
                    boxShadow: '0 15px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1), inset 0 -2px 10px rgba(0,0,0,0.02)'
                }}
            >
                <div className="aspect-square bg-slate-100 overflow-hidden relative">
                    <img
                        src={image}
                        alt="Memory"
                        className="w-full h-full object-cover filter contrast-[1.1] brightness-[1.05]"
                        style={{ objectPosition: objectPosition || 'center' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-white/5 to-white/20 pointer-events-none opacity-40"></div>
                </div>
                <div className="absolute -bottom-1 left-2 right-2 h-4 bg-black/5 blur-md -z-10 rounded-[50%]"></div>
            </div>
        </div>
    );
};

const HangingRow = ({ photos, rowIndex }) => {
    return (
        <div className="relative w-full min-h-[220px] mb-8 flex justify-center items-start pt-0 overflow-visible">
            {/* The String */}
            <svg
                className="absolute top-10 left-0 right-0 w-full pointer-events-none z-10 opacity-70"
                style={{ height: '40px' }}
                viewBox="0 0 1000 40"
                preserveAspectRatio="none"
            >
                <path
                    d="M0,15 Q500,45 1000,15"
                    stroke="#8B4513"
                    strokeWidth="1.5"
                    fill="none"
                    strokeDasharray="3,2"
                />
            </svg>

            {/* Photos wrapper */}
            <div className="relative z-20 flex justify-center w-full px-4 pt-4">
                {photos.map((p, i) => {
                    const warpY = `${(Math.random() * 8 - 4).toFixed(1)}deg`;
                    const warpX = `${(Math.random() * 4 - 2).toFixed(1)}deg`;

                    // Aligning with SVG M0,15 Q500,45 1000,15
                    // SVG starts at top-10 (40px) + path y=15 = 55px down.
                    // Photo pt-4 (16px) + mt-1 (4px) = 20px base.
                    // Clip middle is 16px down from its own top.
                    // Clip top is -7 (-28px) from Polaroid Frame.
                    // So clip middle is 12px above Polaroid Frame top.
                    // Base + verticalOffset - 12 = 55
                    // verticalOffset = 55 + 12 - 20 = 47px for edges.

                    // Peak is y=30. Total target = 40+30 = 70px.
                    // 20 + verticalOffset - 12 = 70
                    // verticalOffset = 70 + 12 - 20 = 62px for peak.

                    let verticalOffset = '0px';
                    if (photos.length === 3) {
                        verticalOffset = i === 1 ? '58px' : '38px';
                    } else if (photos.length === 2) {
                        // Approx 25% and 75% depth is y=26.25. Target = 66.25.
                        // 20 + offset - 12 = 66.25 => offset = 58px.
                        verticalOffset = '52px';
                    } else {
                        verticalOffset = '58px';
                    }

                    return (
                        <div key={i} style={{ paddingTop: verticalOffset }}>
                            <Polaroid
                                {...p}
                                warpY={warpY}
                                warpX={warpX}
                                rowIndex={rowIndex}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const PolaroidBoard = ({ months }) => {
    const [cols, setCols] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            setCols(window.innerWidth < 640 ? 2 : 3);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const rows = [];
    for (let i = 0; i < months.length; i += cols) {
        rows.push(months.slice(i, i + cols));
    }

    return (
        <div className="w-full max-w-5xl mx-auto bg-[#f9f5f0] p-4 px-10 sm:p-12 sm:px-16 shadow-2xl rounded-sm border-8 border-white relative min-h-screen sm:min-h-0">
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/wood-pattern.png")' }}></div>

            <div className="relative z-10 flex flex-col items-center py-8">
                {rows.map((rowPhotos, i) => (
                    <HangingRow key={i} photos={rowPhotos} rowIndex={i} />
                ))}
                {/* Footer Message */}
                <div className="mt-16 text-center relative z-10">
                    <p className="font-script text-3xl md:text-5xl text-slate-800 drop-shadow-sm px-4">
                        Thank You For Existing Doc 🧿💗
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PolaroidBoard;
