import { forwardRef } from "@yamada-ui/core"
import { Youtube as YoutubeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type YoutubeProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Youtube = forwardRef<YoutubeProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={YoutubeIcon} {...props} />
))
