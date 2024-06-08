import { forwardRef } from "@yamada-ui/core"
import { FolderHeart as FolderHeartIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FolderHeartProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderHeart = forwardRef<FolderHeartProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FolderHeartIcon} {...props} />
))
