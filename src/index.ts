import React from "react";
import { render } from 'react-nil'

export const start = (el: React.ReactNode) => render(el)
export * from './bot'
export * from './command'
export * from './sendMessage'
export * from './Event'