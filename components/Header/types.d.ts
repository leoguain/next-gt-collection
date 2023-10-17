export type HeaderProps = {
  title: string;
  logo?: string;
};

export type MenuProps = {
  items: MenuItemProps[];
};
export type MenuItemProps = {
  id: string;
  title: string;
  href: string;
  subItems: SubItemProps[];
};

export type SubMenuProps = {
  subItems: SubItemProps[];
};
export type SubItemProps = {
  id: string;
  title: string;
  href: string;
};
