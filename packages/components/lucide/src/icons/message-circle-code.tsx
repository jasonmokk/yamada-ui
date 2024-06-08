import { forwardRef } from "@yamada-ui/core"
import { MessageCircleCode as MessageCircleCodeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MessageCircleCodeProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageCircleCode = forwardRef<MessageCircleCodeProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={MessageCircleCodeIcon} {...props} />
  ),
)
