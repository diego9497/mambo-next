function Logo(props) {
  return (
    <svg height={40} viewBox="0 0 466.069 67" {...props}>
      <text
        transform="translate(0 54)"
        fill="#278e57"
        fontSize={50.124}
        fontFamily="SegoeUI, Segoe UI"
        letterSpacing=".02em"
      >
        <tspan x={0} y={0} fill="#335fd7">
          {"M"}
        </tspan>
        <tspan y={0} fill="#ffcf12">
          {"A"}
        </tspan>
        <tspan y={0}>{"M"}</tspan>
        <tspan y={0} fill="#ed96ae">
          {"B"}
        </tspan>
        <tspan y={0} fill="#e9421f">
          {"O"}
        </tspan>
        <tspan y={0} fill="#000" />
        <tspan y={0} fill="#8bccf0">
          {"V"}
        </tspan>
        <tspan y={0} fill="#335fd7">
          {"I"}
        </tspan>
        <tspan y={0} fill="#ffcf12">
          {"A"}
        </tspan>
        <tspan y={0} fill="#ed96ae">
          {"J"}
        </tspan>
        <tspan y={0} fill="#e9421f">
          {"E"}
        </tspan>
        <tspan y={0} fill="#ffcf12">
          {"R"}
        </tspan>
        <tspan y={0}>{"O"}</tspan>
      </text>
      <path d="M464.636 22.269l-13.245 14.163-13.67-14.617-13.67 14.617-13.245-14.163h-1.432v31.272h1.438l13.239-14.157 13.67 14.618 13.67-14.617 13.239 14.156h1.439V22.269zm-53.246 27.7V25.845l11.281 12.063zm26.331 1.078l-11.346-12.131h22.693zm-11.346-14.145l11.346-12.133 11.347 12.133zm26.4 1.008l11.281-12.063v24.124z" />
    </svg>
  );
}

export default Logo;
