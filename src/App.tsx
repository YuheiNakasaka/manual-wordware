import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [inputText, setInputText] = useState('')
  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value)
  }
  const [intentUrlForX, setIntentUrlForX] = useState('https://twitter.com/intent/tweet')
  const handleShare = () => {
    if (!inputText) return

    const encodedInputText = encodeURIComponent(inputText)
    const shareUrl = encodeURIComponent(`https://yuheinakasaka.github.io/manual-wordware/?text=${encodedInputText}`)
    const intentUrlForX = `https://twitter.com/intent/tweet?text=%E6%89%8B%E6%9B%B8%E3%81%8D%E3%81%A7wordware&url=${shareUrl}`
    setIntentUrlForX(intentUrlForX)
  }

  useEffect(() => {
    if (window.location.search) {
      const searchParams = new URLSearchParams(window.location.search)
      const text = searchParams.get('text')
      if (text) {
        setInputText(text)
      }
    }
  }, [])

  return (
    <>
      <header className='w-full bg-white p-2 text-black'>
        <h1 className='text-2xl font-bold text-center'>自演wordware</h1>
      </header>

      <div className='flex-center relative min-h-screen w-full flex-col gap-12 bg-[#F9FAFB] px-4 py-8 sm:px-12 md:px-28 md:pt-24'>
        <div className='pt-0 pb-12 flex flex-col text-gray-700'>
          <p className='text-center text-xl font-bold mb-4'>ここに文章を入力してください</p>
          <textarea
            className='w-full p-2 border rounded-2xl min-h-[200px]'
            rows={4}
            value={inputText}
            onChange={handleInputChange}
            placeholder='例) 素晴らしい人間ですね！本当に素晴らしいです！天才！天才！万歳！'
          />
        </div>

        <div className='text-card-foreground shadow-sm relative w-full overflow-hidden rounded-2xl border bg-opacity-5 px-4 pb-4 bg-red-500 sm:col-span-2'>
          <div className='flex h-full flex-col justify-between'>
            <div>
              <div className='space-y-1.5 p-6 flex w-full flex-col items-start'>
                <h3 className='font-semibold tracking-tight flex w-full items-center justify-between py-2 pb-4 text-2xl'>
                  <div className='flex items-center gap-2'>
                    <svg
                      stroke='currentColor'
                      fill='currentColor'
                      stroke-width='0'
                      viewBox='0 0 256 256'
                      className='text-red-500'
                      height='26'
                      width='26'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <title>Roast</title>
                      <path d='M183.89,153.34a57.6,57.6,0,0,1-46.56,46.55A8.75,8.75,0,0,1,136,200a8,8,0,0,1-1.32-15.89c16.57-2.79,30.63-16.85,33.44-33.45a8,8,0,0,1,15.78,2.68ZM216,144a88,88,0,0,1-176,0c0-27.92,11-56.47,32.66-84.85a8,8,0,0,1,11.93-.89l24.12,23.41,22-60.41a8,8,0,0,1,12.63-3.41C165.21,36,216,84.55,216,144Zm-16,0c0-46.09-35.79-85.92-58.21-106.33L119.52,98.74a8,8,0,0,1-13.09,3L80.06,76.16C64.09,99.21,56,122,56,144a72,72,0,0,0,144,0Z' />
                    </svg>
                    <span className='text-xl font-light text-red-500'>Roast</span>
                  </div>
                  <a
                    target='_blank'
                    className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 rounded-sm px-3 border border-transparent transition-all duration-100 hover:border-black hover:bg-transparent bg-red-500 flex-center gap-2 text-lg text-white'
                    href={intentUrlForX}
                    rel='noreferrer'
                    onClick={handleShare}
                  >
                    <svg
                      stroke='currentColor'
                      fill='currentColor'
                      stroke-width='0'
                      viewBox='0 0 256 256'
                      height='1em'
                      width='1em'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <title>Share</title>
                      <path d='M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z' />
                    </svg>
                    Share
                  </a>
                </h3>
                <div className='w-full border-b border-gray-300' />
              </div>
              <div className='p-6 pt-0 flex flex-col text-gray-700'>
                <div className='space-y-2'>
                  <p className='mb-2 last:mb-0'>{inputText}</p>
                </div>
              </div>
            </div>
            <div className='px-6 pt-0 flex items-center justify-end space-x-2'>
              <a href='https://wordware.ai?utm_source=twitterai'>
                <svg width='18' height='18' viewBox='0 0 59 44' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <title>Wordware</title>
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M13 0H0V44H13V43.1128L13.1923 43.3051L29.2584 27.239L45.3245 43.3051L45.5168 43.1128V44H58.5168V0H45.5168V25.1127L38.1924 17.7882L29.2584 26.7222L20.3245 17.7882L13 25.1127V0Z'
                    fill='black'
                  />
                </svg>
              </a>
              <span className='items-center text-xs'>
                Made with{' '}
                <a href='https://wordware.ai?utm_source=twitterai' className='font-semibold underline-offset-4 hover:underline'>
                  Wordware
                </a>{' '}
                - AI superpowers for builders
              </span>
            </div>
          </div>
        </div>
      </div>
      <footer className='w-full py-4 text-center text-sm text-gray-500 bg-[#F9FAFB]'>
        <p>
          Created by{' '}
          <a href='https://x.com/revolukozar' target='_blank' rel='noopener noreferrer' className='underline hover:text-gray-700'>
            @revolukozar
          </a>
        </p>
      </footer>
    </>
  )
}

export default App
