import { ComponentPropsWithRef } from "react";

type DivProps = ComponentPropsWithRef<"div">;

const SkeletonLoader: React.FC<DivProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={["animate-pulse", className].join(" ")} {...props}>
      {children}
    </div>
  );
};
export default SkeletonLoader;
