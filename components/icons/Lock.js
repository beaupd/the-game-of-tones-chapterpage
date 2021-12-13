const Lock = ({ fill = "#000000", width = "24", height = "24", className = "" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" className={className}>
            <path
                data-name="lock (1)"
                d="M 17.4 9.9 H 16.8 V 7.2 A 5.4 5.4 90 0 0 11.3 1.9 A 5.5 5.5 90 0 0 5.7 7.3 V 10 H 5 A 2.1 2.1 90 0 0 2.9 12.1 L 2.9 21.4 A 2.1 2.1 90 0 0 5 23.5 L 17.4 23.5 A 2.1 2.1 90 0 0 19.5 21.4 L 19.5 12 A 2.1 2.1 90 0 0 17.4 9.9 Z M 7.6 7.3 A 3.6 3.6 90 0 1 11.3 3.7 A 3.6 3.6 90 0 1 15 7.3 V 10 L 7.6 10 Z M 7.6 7.3"
                fill={fill}
            />
        </svg>
    )
}

export default Lock