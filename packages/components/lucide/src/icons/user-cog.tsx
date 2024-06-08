import { forwardRef } from "@yamada-ui/core"
import { UserCog as UserCogIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type UserCogProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UserCog = forwardRef<UserCogProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={UserCogIcon} {...props} />
))
