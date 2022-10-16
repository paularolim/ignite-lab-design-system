import { TextInputProps, TextInputRootProps } from "./types";

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className="py-4 px-3 rounded h-12 bg-gray-800 w-full flex gap-3 items-center focus-within:ring-2 ring-cyan-300">
      {children}
    </div>
  );
}

function TextInputInput({ ...rest }: TextInputProps) {
  return (
    <input
      className="bg-transparent flex-1 text-gray-100 text-xs outline-none placeholder:text-gray-400"
      {...rest}
    />
  );
}

function TextInputIcon({ children }: TextInputProps) {
  return <div className="w-6 h-6 flex justify-center items-center text-gray-400">{children}</div>;
}

TextInputRoot.displayName = "TextInput.Root";
TextInputInput.displayName = "TextInput.Input";
TextInputIcon.displayName = "TextInput.Icon";

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
