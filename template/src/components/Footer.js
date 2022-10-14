import React from "react"
import { Copywrite } from "./Copywrite"
import { RedesSociais } from "./RedesSociais"

export function Footer() {
    return (
        <section className="footer">
            <RedesSociais/>
            <Copywrite/>
        </section>
    )
}