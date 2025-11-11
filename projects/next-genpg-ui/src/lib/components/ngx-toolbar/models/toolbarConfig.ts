import { Type } from "@angular/core";
import { buttonSeverity } from "../../ngx-button/models/btnLabel";

export interface ToolbarConfig {
  toolbarStyle: [key: string],
  logo?: ToolbarLogo;
  items?: ToolbarItem[]; // fully dynamic items, start & end can be handled via CSS flex
  avatar?: { imageUrl: string; alt?: string; menuItems?: string[] };
}
/** Discriminated union for toolbar items */
export type ToolbarItem = ButtonItem | MenuItem | ComponentItem;
/** Base type for all toolbar items */
export interface ToolbarItemBase {
  id?: string;
  tooltip?: string;
}
/** Specific types */
export interface ButtonItem extends ToolbarItemBase {
  kind: 'button';
  label: string;
  icon?: string;
  severity: buttonSeverity;
  size?: 'small' | 'large';
  type?: 'plain' | 'text' | 'outlined' | 'contrast';
  action?: () => void;
  disabled?: boolean;
}

export interface MenuItem extends ToolbarItemBase {
  kind: 'menu';
  label: string;
  items: Array<{ label: string; action: () => void }>;
}
export interface ComponentItem<T = any> extends ToolbarItemBase {
  kind: 'component';
  component: Type<any>;
  data?: T;
}
/** Toolbar logo (dynamic) */
export type ToolbarLogo =
  | { type: 'svg'; svgPath: string; color?: string; width?: string; height?: string }
  | { type: 'image'; imageUrl: string; alt?: string; width?: string; height?: string }
  | { type: 'component'; component: Type<any>; data?: any };
