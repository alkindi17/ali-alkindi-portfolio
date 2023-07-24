import { useTheme } from "next-themes"


export default function getCurrentTheme() {
    const { resolvedTheme } = useTheme()

    return resolvedTheme;
}