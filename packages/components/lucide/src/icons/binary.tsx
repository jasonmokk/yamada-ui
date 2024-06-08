import { forwardRef } from "@yamada-ui/core"
import { Binary as BinaryIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BinaryProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Binary = forwardRef<BinaryProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BinaryIcon} {...props} />
))
