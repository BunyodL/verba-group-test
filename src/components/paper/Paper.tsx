import { Paper as MUIPaper } from "@mui/material";
import { HTMLAttributes, ReactNode } from "react";

type PaperProps = HTMLAttributes<HTMLDivElement> & {
    children: ReactNode;
};

export const Paper = ({ children, ...props }: PaperProps) => {
    return (
        <MUIPaper
            sx={{
                padding: "12px",
                width: "100%",
                background: "#908A93",
                color: "white",
            }}
            {...props}
        >
            {children}
        </MUIPaper>
    );
};
