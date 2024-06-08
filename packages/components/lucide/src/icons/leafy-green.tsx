import { forwardRef } from "@yamada-ui/core"
import { LeafyGreen as LeafyGreenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type LeafyGreenProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LeafyGreen = forwardRef<LeafyGreenProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LeafyGreenIcon} {...props} />
))
