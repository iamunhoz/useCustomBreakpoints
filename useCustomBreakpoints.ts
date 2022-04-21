import { useEffect, useState } from 'react'

interface Breakpoints { 
  xs: BreakPointValues 
  sm: BreakPointValues 
  md: BreakPointValues 
  lg: BreakPointValues 
  xl: BreakPointValues 
  xxl: BreakPointValues
}

interface BreakPointValues {
  inBetween: boolean
  biggerThan: boolean
  smallerThan: boolean
}

/** 
 * @returns an object with the following properties:
 * xs, sm, md, lg, xl, xxl
 * 
 * which each one has 3 boolean properties:
 * inBetween, smallerThan and biggerThan
 * according to the width of the screen, in pixels
 * 
 * Breakpoints are:
 * 'xs' for < 375px, 
 * 'sm' between 375px and 600px,
 * 'md' between 601px and 960px,
 * 'lg' between 961px and 1280px,
 * 'xl' between 1281px and 1920px and
 * 'xxl' for > 1920px
 */
export const useCustomBreakpoint = (): Breakpoints => {
  const [breakpoint, setBreakPoint] = useState<Breakpoints>({
    xs: {
      inBetween: false,
      biggerThan: false,
      smallerThan: false
    },
    sm: {
      inBetween: false,
      biggerThan: false,
      smallerThan: false
    },
    md: {
      inBetween: false,
      biggerThan: false,
      smallerThan: false
    },
    lg: {
      inBetween: false,
      biggerThan: false,
      smallerThan: false
    },
    xl: {
      inBetween: false,
      biggerThan: false,
      smallerThan: false
    },
    xxl: {
      inBetween: false,
      biggerThan: false,
      smallerThan: false
    }
  })
  const [windowSize, setWindowSize] = useState({
    width: 1,
    height: 1,
  })

  const handleResize = () => {
    setWindowSize({
      width: window.screen.width,
      height: window.screen.height,
    })
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    //xs
    if (windowSize.width > 0 && windowSize.width < 375) {
      setBreakPoint({
        xs: {
          inBetween: true,
          biggerThan: false,
          smallerThan: true
        },
        sm: {
          inBetween: false,
          biggerThan: false,
          smallerThan: true
        },
        md: {
          inBetween: false,
          biggerThan: false,
          smallerThan: true
        },
        lg: {
          inBetween: false,
          biggerThan: false,
          smallerThan: true
        },
        xl: {
          inBetween: false,
          biggerThan: false,
          smallerThan: true
        },
        xxl: {
          inBetween: false,
          biggerThan: false,
          smallerThan: true
        }
      })
    }
    //sm
    if (windowSize.width >= 375 && windowSize.width < 600) {
      setBreakPoint({
        xs: {
          inBetween: false,
          biggerThan: true,
          smallerThan: false
        },
        sm: {
          inBetween: true,
          biggerThan: false,
          smallerThan: false
        },
        md: {
          inBetween: false,
          biggerThan: false,
          smallerThan: true
        },
        lg: {
          inBetween: false,
          biggerThan: false,
          smallerThan: true
        },
        xl: {
          inBetween: false,
          biggerThan: false,
          smallerThan: true
        },
        xxl: {
          inBetween: false,
          biggerThan: false,
          smallerThan: true
        }
      })
    }
    //md
    if (windowSize.width >= 600 && windowSize.width < 960) {
      setBreakPoint({
        xs: {
          inBetween: false,
          biggerThan: true,
          smallerThan: false
        },
        sm: {
          inBetween: false,
          biggerThan: true,
          smallerThan: false
        },
        md: {
          inBetween: true,
          biggerThan: false,
          smallerThan: false
        },
        lg: {
          inBetween: false,
          biggerThan: false,
          smallerThan: true
        },
        xl: {
          inBetween: false,
          biggerThan: false,
          smallerThan: true
        },
        xxl: {
          inBetween: false,
          biggerThan: false,
          smallerThan: true
        }
      })
    }
    //lg
    if (windowSize.width >= 960 && windowSize.width < 1280) {
      setBreakPoint({
        xs: {
          inBetween: false,
          biggerThan: true,
          smallerThan: false
        },
        sm: {
          inBetween: false,
          biggerThan: true,
          smallerThan: false
        },
        md: {
          inBetween: false,
          biggerThan: true,
          smallerThan: false
        },
        lg: {
          inBetween: true,
          biggerThan: false,
          smallerThan: false
        },
        xl: {
          inBetween: false,
          biggerThan: false,
          smallerThan: true
        },
        xxl: {
          inBetween: false,
          biggerThan: false,
          smallerThan: true
        }
      })
    }
    //xl
    if (windowSize.width >= 1280 && windowSize.width < 1920) {
      setBreakPoint({
        xs: {
          inBetween: false,
          biggerThan: true,
          smallerThan: false
        },
        sm: {
          inBetween: false,
          biggerThan: true,
          smallerThan: false
        },
        md: {
          inBetween: false,
          biggerThan: true,
          smallerThan: false
        },
        lg: {
          inBetween: false,
          biggerThan: true,
          smallerThan: false
        },
        xl: {
          inBetween: true,
          biggerThan: false,
          smallerThan: false
        },
        xxl: {
          inBetween: false,
          biggerThan: false,
          smallerThan: true
        }
      })
    }
    //xxl
    if (windowSize.width >= 1920) {
      setBreakPoint({
        xs: {
          inBetween: false,
          biggerThan: true,
          smallerThan: false
        },
        sm: {
          inBetween: false,
          biggerThan: true,
          smallerThan: false
        },
        md: {
          inBetween: false,
          biggerThan: true,
          smallerThan: false
        },
        lg: {
          inBetween: false,
          biggerThan: true,
          smallerThan: false
        },
        xl: {
          inBetween: false,
          biggerThan: true,
          smallerThan: false
        },
        xxl: {
          inBetween: true,
          biggerThan: true,
          smallerThan: false
        }
      })
    }

    return () => window.removeEventListener('resize', handleResize)
  }, [windowSize.width])
  return breakpoint
}