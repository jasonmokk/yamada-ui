import { forwardRef } from "@yamada-ui/core"
import { FolderGit as FolderGitIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FolderGitProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderGit = forwardRef<FolderGitProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FolderGitIcon} {...props} />
))
