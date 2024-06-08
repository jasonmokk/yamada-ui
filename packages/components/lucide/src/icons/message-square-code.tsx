import { forwardRef } from "@yamada-ui/core"
import { MessageSquareCode as MessageSquareCodeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MessageSquareCodeProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageSquareCode = forwardRef<MessageSquareCodeProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={MessageSquareCodeIcon} {...props} />
  ),
)
