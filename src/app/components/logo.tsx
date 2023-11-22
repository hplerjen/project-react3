

type LogoProps = {
  width?: string;
};

export const Logo = (props: LogoProps) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 339.12 56.69"
        className="cursor-pointer"
        {...props}
      >
      </svg>
    </div>
  );
};
