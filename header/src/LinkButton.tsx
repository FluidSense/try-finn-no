import { PropsWithChildren } from "react";
import { ReactComponent as CircleUser } from "@fabric-ds/icons/dist/32/circle-user.svg";
import { ReactComponent as Bell } from "@fabric-ds/icons/dist/32/bell.svg";
import { ReactComponent as CirclePlus } from "@fabric-ds/icons/dist/32/circle-plus.svg";
import { ReactComponent as Messages } from "@fabric-ds/icons/dist/32/messages.svg";

// LinkButton.tsx
type Props = PropsWithChildren<{
  text: string;
  url?: string;
}>;

function LinkButton({ text, url, children }: Props) {
  return (
    <a
      href={url}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        textDecoration: "none",
        marginLeft: "1em",
      }}
    >
      {children}
      <p style={{ marginLeft: "5px" }}>{text}</p>
    </a>
  );
}

export default LinkButton;

export function Varslinger() {
  return (
    <LinkButton text="Varslinger">
      <Bell />
    </LinkButton>
  );
}

export function NyAnnonse() {
  return (
    <LinkButton text="Ny annonse">
      <CirclePlus />
    </LinkButton>
  );
}

export function Meldinger() {
  return (
    <LinkButton text="Meldinger">
      <Messages />
    </LinkButton>
  );
}

export function LoggInn() {
  return (
    <LinkButton text="Logg inn">
      <CircleUser />
    </LinkButton>
  );
}
