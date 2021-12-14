const Music = ({
  fill = "#000000",
  width = "44",
  height = "44",
  className = "",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-music"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#2c3e50"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <circle cx="6" cy="17" r="3" />
      <circle cx="16" cy="17" r="3" />
      <polyline points="9 17 9 4 19 4 19 17" />
      <line x1="9" y1="8" x2="19" y2="8" />
    </svg>
  );
};

export default Music