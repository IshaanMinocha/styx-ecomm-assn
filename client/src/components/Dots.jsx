import React from "react";
import Side1 from "./Side1";

const Dots = ({ imgIndex, setImgIndex }) => {
    return (
        <div className="absolute bottom-8 left-0 right-0 z-40 flex w-full justify-center gap-2">
            {components.map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => setImgIndex(idx)}
                    className={`h-4 w-4 rounded-full transition-colors ${idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
                        }`}
                />
            ))}
        </div>
    );
};

const components = [<Side1 />, <Side1 />, <Side1 />];

export default Dots;
