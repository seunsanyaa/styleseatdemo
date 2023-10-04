import Image from 'next/image'
import s from './card.module.scss'

export function Card({ job }) {
  return (
    <div className={s.container}>
      <div className={s.imageDiv}>
        <Image width={178} height={230} src={job.image} alt="image" />
      </div>

      <div className={s.type}>
        <span>{job.text}</span>
      </div>
    </div>
  )
}
