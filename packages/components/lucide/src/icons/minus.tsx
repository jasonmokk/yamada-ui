import { forwardRef } from "@yamada-ui/core"
import { Minus as MinusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MinusProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Minus = forwardRef<MinusProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MinusIcon} {...props} />
))
