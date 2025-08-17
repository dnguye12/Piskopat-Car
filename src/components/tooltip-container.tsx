import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

interface TooltipContainerProps {
    trigger?: React.ReactNode;
    triggerText?: string;
    content: string;
}

const TooltipContainer = ({ trigger, triggerText, content }: TooltipContainerProps) => {
    return (
        <Tooltip>
            {
                trigger
                    ?
                    (
                        <TooltipTrigger asChild>{trigger}</TooltipTrigger>
                    )
                    :
                    (
                        <TooltipTrigger>{triggerText}</TooltipTrigger>
                    )
            }

            <TooltipContent>
                <p>{content}</p>
            </TooltipContent>
        </Tooltip>
    );
}

export default TooltipContainer;