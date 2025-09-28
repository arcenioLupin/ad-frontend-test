type LogoApplyDigitalProps = {
  size?: number; // controla el ancho
  color?: string; // controla el fill
  className?: string;
};

export const LogoApplyDigital = ({
  size = 52,
  color = "#FFFFFF",
  className = "",
}: LogoApplyDigitalProps) => (
  <svg
    width={size}
    height={Math.round((size * 45) / 52)} // mantiene la proporción original
    viewBox="0 0 52 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M25.5812 0L0 44.0922H51.147L25.5812 0ZM15.6863 30.8692H27.6562L21.679 20.5589L25.5812 13.8241L39.3784 37.604H11.7841L15.6863 30.8692Z"
      fill={color}
    />
  </svg>
);
