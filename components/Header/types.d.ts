export type HeaderProps = {
  title: string;
  logo?: string;
};

export type MenuProps = {
  items: MenuItemProps[];
};

export type SubMenuProps = {
  subItems: SubItemProps[];
};

export type MenuItemProps = {
  id: string;
  href: string;
  subItems: SubItemProps[];
};

export type SubItemProps = {
  id: string;
  href: string;
};
