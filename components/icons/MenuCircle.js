const MenuCircle = ({className=""}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="41.25" height="41.25" className={className}>
      <defs>
        <linearGradient
          id="a"
          x1=".113"
          y1=".146"
          x2="1"
          y2="1.023"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#ccbdbd" />
          <stop offset=".256" stopColor="#dedede" />
          <stop offset="1" stopColor="gray" />
          <stop offset="1" />
        </linearGradient>
      </defs>
      <g transform="translate(-14.875 -18.875)">
        <ellipse
          cx="20.625"
          cy="20.625"
          rx="20.625"
          ry="20.625"
          transform="translate(14.875 18.875)"
          fill="#fff"
        />
        <circle
          cx="9.998"
          cy="9.998"
          r="9.998"
          transform="translate(25.503 29.502)"
          fill="url(#a)"
        />
      </g>
    </svg>
  );
};

export default MenuCircle;
