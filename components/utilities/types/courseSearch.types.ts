export type FilterButtonProps = {
  children: string;
  icon: string;
  iconHeight: number;
  iconWidth: number;
};


export type PaginationArrowProps = {
  direction: "left" | "right";
  disabled: boolean;
  onClick: () => void;
};

export type IconProps = {
  alt?: string;
  file: string;
  height: number;
  width: number;
};