import React from "react";

export type CardProps = {
    name: string
    description?:string
    height?:React.CSSProperties
    image?: string
    children?:React.ReactNode
}