import { useRef, useState } from 'react'
import styled, { css } from 'styled-components'

const common = css`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background: rgba(0,0,0,.06);
    position: absolute;

    @keyframes wave{
      from{
        transform: scale(1);
      }to{
        transform: scale(1.6);
      }
    }
  `
const Wave = styled.div`
    ${common};
    animation: wave 1s ease 0s infinite alternate-reverse forwards;
  `
const Wave2 = styled.div`
    ${common};
    animation: wave 1s ease .3s infinite alternate-reverse forwards;
  `

function Accessibility({ src, ...props }) {
  const audio = useRef(null)
  const [playing, setPlaying] = useState(false)

  const playPause = () => {
    if (!playing) {
      audio.current.play()
    } else {
      audio.current.pause()
    }
    setPlaying(!playing)
  }

  return (
    <div onClick={playPause} style={{ position: 'relative' }}>
      {playing &&
        <>
          <Wave />
          <Wave2 />
        </>
      }
      <svg width={30} height={30} viewBox="0 0 61.159 61.159" {...props}>
        <g transform="translate(-1836.766 -16.833)" fill="inherit">
          <path d="M1867.377 67.285l.259.009a6.605 6.605 0 006.543-4.672 9.773 9.773 0 01.925-2.214l.036-.058a12.887 12.887 0 014.882-4.549 13.194 13.194 0 10-16.893-19.434 1.064 1.064 0 001.713 1.262A11.056 11.056 0 111879 53.936a15 15 0 00-5.665 5.319l-.036.058a11.8 11.8 0 00-1.159 2.692 4.489 4.489 0 01-4.631 3.159 4.576 4.576 0 01-4.171-4.469 1.065 1.065 0 10-2.129.01 6.657 6.657 0 006.168 6.58z" />
          <path d="M1867.769 43.237a4.92 4.92 0 01.32-.786 6.385 6.385 0 015.225-3.464h.052a5.291 5.291 0 012.874 9.907 15.345 15.345 0 00-7.326 7.849 1.064 1.064 0 001.958.835.865.865 0 00.027-.071 13.036 13.036 0 016.361-6.761 7.423 7.423 0 00-3.989-13.917h-.064a8.51 8.51 0 00-7.005 4.618 6.938 6.938 0 00-.771 3.224 1.091 1.091 0 001.1 1.039c.575.019 1.238-2.473 1.238-2.473zM1847.752 52.023a1.064 1.064 0 001.5 0 5.209 5.209 0 00.235-7.1 1.064 1.064 0 10-1.6 1.4 3.077 3.077 0 01-.138 4.19 1.064 1.064 0 000 1.505zM1852.445 55.224a1.065 1.065 0 001.5-.164 10.759 10.759 0 00.426-12.86 1.064 1.064 0 10-1.743 1.22 8.621 8.621 0 01-.342 10.3 1.063 1.063 0 00.159 1.5z" />
          <path d="M1857.026 58.348a1.063 1.063 0 001.491-.2 16.243 16.243 0 00.621-18.718 1.064 1.064 0 00-1.777 1.172 14.109 14.109 0 01-.538 16.255 1.063 1.063 0 00.2 1.492z" />
          <circle
            cx={29.58}
            cy={29.58}
            r={29.58}
            transform="translate(1837.766 17.833)"
            fill="none"
            stroke="inherit"
            strokeMiterlimit={10}
            strokeWidth={2}
          />
        </g>
      </svg>
      <audio src={`/audio/${src}`} ref={audio} onEnded={() => { setPlaying(false) }} />
    </div>
  );
}

export default Accessibility;
