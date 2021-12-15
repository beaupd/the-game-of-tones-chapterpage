const Running = ({fill = "#000000", className=""}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke={fill}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="13" cy="4" r="1" />
            <path d="M4 17l5 1l.75 -1.5" />
            <path d="M15 21l0 -4l-4 -3l1 -6" />
            <path d="M7 12l0 -3l5 -1l3 3l3 1" />
        </svg>
    );
};

export default Running;
