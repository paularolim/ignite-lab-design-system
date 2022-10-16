import { ButtonProps } from "./types";

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      className="py-4 px-3 bg-cyan-500 rounded font-semibold text-gray-1000 text-sm w-full transition-colors hover:bg-cyan-300"
      {...rest}
    >
      {children}
    </button>
  );
}
