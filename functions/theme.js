import { useTheme } from "next-themes";

export default function GetCurrentTheme() {
  const { resolvedTheme } = useTheme();

  return resolvedTheme;
}
