import { BlockWith } from '@/models/space'

type Props = {
  block: BlockWith<'space'>
}
export default function SpaceBlock({ block }: Props) {
  return (
    <div>
      <a href={block.url}>{block.text}</a>
    </div>
  )
}