import { useWindowDimensions } from "../WindowDimensionsProvider";
import { useEffect } from "react";

const ResponsiveLayout = ({ breakPoint = 414, renderMobile, renderDesktop }) => {
    const { width } = useWindowDimensions();
    const isDesktop = width > breakPoint;

    useEffect(() => {
        console.log("width =", width, "breakPoint =", breakPoint);
        console.log("is desktop =", isDesktop);
    });

    return isDesktop ? renderDesktop() : renderMobile();
};

export default ResponsiveLayout;
