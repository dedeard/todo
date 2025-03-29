import * as React from 'react'

export const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg xmlns="http://www.w3.org/2000/svg" width={11} height={9} {...props}>
    <path fill="none" stroke="currentColor" strokeWidth="2" d="M1 4.304 3.696 7l6-6" />
  </svg>
)

export const DeleteIcon: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m16.97 0 .708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
    />
  </svg>
)

export const SunIcon: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13 21a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1m-5.657-2.343a1 1 0 0 1 0 1.414l-2.121 2.121a1 1 0 0 1-1.414-1.414l2.12-2.121a1 1 0 0 1 1.415 0m12.728 0 2.121 2.121a1 1 0 0 1-1.414 1.414l-2.121-2.12a1 1 0 0 1 1.414-1.415M13 8a5 5 0 1 1 0 10 5 5 0 0 1 0-10m12 4a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2zM4 12a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2zm18.192-8.192a1 1 0 0 1 0 1.414l-2.12 2.121a1 1 0 0 1-1.415-1.414l2.121-2.121a1 1 0 0 1 1.414 0m-16.97 0 2.121 2.12A1 1 0 0 1 5.93 7.344L3.808 5.222a1 1 0 0 1 1.414-1.414M13 0a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1"
    ></path>
  </svg>
)

export const MoonIcon: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13 0q1.217.001 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0"
    ></path>
  </svg>
)
