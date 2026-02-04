export type CaseProps = {
  children: React.ReactNode;
  when:
    | number
    | string
    | boolean
    | ((value: number | string | boolean) => boolean);
};

export default function Case({ children }: CaseProps) {
  return <>{children}</>;
}
