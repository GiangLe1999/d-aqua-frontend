import { Button } from "./button";

interface Props {
  text: string;
}

const OutlineButton = ({ text }: Props) => {
  return (
    <Button className="h-11 bg-transparent border-2 border-[#68DDF0] rounded-full text-[#9aedff]">
      <span>{text}</span>
      <span className="transform group-hover:translate-x-1 transition-transform">
        →
      </span>
    </Button>
  );
};

export default OutlineButton;
