import { Type } from "@angular/core";

export interface DynamicComponentConfig<T = unknown> {
  component: Type<any>;
  data?: T;
}
