import { ButtonSeverity } from "primeng/types/button";
import { buttonSeverity } from "../../ngx-button/models/btnLabel";


export interface ConfigCard {
  title?: string;
  subtitle?: string;
  content?: string;
  imageUrl?: string;
  footer?: string;
  contentComponent?: { component: any; data?: any };
  actionItems?: Array<{ label: string; action: () => void; type?: 'button' | 'link' , severity: buttonSeverity}>;
};

