import { forwardRef } from "@yamada-ui/core"
import { Keyboard as KeyboardIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type KeyboardProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Keyboard = forwardRef<KeyboardProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={KeyboardIcon} {...props} />
))
