import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { useTheme } from "./theme-provider";

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme()

    const handleTheme = () => {
        if (theme === "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button variant="outline" size="icon" className="size-12 cursor-pointer" onClick={handleTheme}>
                    <Sun className="size-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                    <Moon className="absolute size-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                    <span className="sr-only">Design umschalten</span>
                </Button>
            </TooltipTrigger>
            <TooltipContent>
                <p>{"Hell/Dunke"}</p>
            </TooltipContent>
        </Tooltip>
    )
}

export default ThemeToggle;