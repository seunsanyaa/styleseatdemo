import s from './video.module.scss'

export function Video({}) {
  return (
    <div className={s.container}>
      <div className={s.videoDiv}>
        <div className={s.playDiv}>
          <div className={s.play}>
            <svg
              width="21"
              height="26"
              viewBox="0 0 21 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 13L7.65417e-07 25.1244L1.82536e-06 0.875644L21 13Z"
                fill="#ffffff"
              ></path>
            </svg>
          </div>

          <span>Play Now</span>
        </div>
      </div>

      <div className={s.textDiv}>
        <h2 className={s.head}>Manuel, Makeup Artist</h2>
        <p className={s.paragraph}>
          Between glam looks and good vibes, it’s no surprise why
          <br />
          <span className={s.blue}>Manuel’s clients keep coming back.</span>
        </p>
      </div>
    </div>
  )
}
