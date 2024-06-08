import { forwardRef } from "@yamada-ui/core"
import { Settings2 as Settings2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Settings2Props = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Settings2 = forwardRef<Settings2Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Settings2Icon} {...props} />
))
