import { forwardRef } from "@yamada-ui/core"
import { AlignJustify as AlignJustifyIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type AlignJustifyProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignJustify = forwardRef<AlignJustifyProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={AlignJustifyIcon} {...props} />,
)
