import React from "react";

function BackToTop() {
    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
        function onScroll() {
            if (window.scrollY > 300) setVisible(true);
            else setVisible(false);
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (!visible) return null;

    return (
        <button
            type="button"
            onClick={handleClick}
            className="fixed bottom-4 right-4 z-40 inline-flex items-center justify-center rounded-full bg-primary text-white shadow-lg border border-primary/70 w-10 h-10 text-lg hover:bg-primary/90 focus:outline-none"
            aria-label="Back to top"
        >
            ↑
        </button>
    );
}

export default BackToTop;
