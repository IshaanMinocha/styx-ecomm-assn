import React from "react";
import { twMerge } from "tailwind-merge";

const SplashButton = ({ children, className, ...rest }) => {
    return (
        <button
            className={twMerge(
                "rounded-md bg-gradient-to-br from-blue-400 to-primary px-4 py-2 text-zinc-50 ring-2 ring-primary/50 ring-offset-2 ring-offset-zinc-950 transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98] active:ring-primary/70",
                className
            )}
            {...rest}
        >
            {children}
        </button>
    );
};

export { SplashButton };
