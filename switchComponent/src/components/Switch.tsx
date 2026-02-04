import { Children, isValidElement } from "react";
import Case, { type CaseProps } from "./Case";
import Default from "./Default";

type Props = {
  children: React.ReactNode;
  value: number | string | boolean;
};

function Switch({ children, value }: Props) {
  const childArray = Children.toArray(children);
  const defaultCase: React.ReactNode[] = [];
  const cases: React.ReactNode[] = [];

  childArray.forEach((child) => {
    if (isValidElement(child)) {
      if (child.type === Case) {
        const props = child?.props as CaseProps;
        if (typeof props.when === "function") {
          if (props.when(value)) {
            cases.push(child);
          }
        } else if (props.when === value) {
          cases.push(child);
        }
      } else if (child?.type === Default) {
        defaultCase.push(child);
      }
    }
  });

  return cases.length > 0 ? cases : defaultCase;
}

export default Switch;
