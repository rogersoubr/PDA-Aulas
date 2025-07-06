import React from "react";
import style from "@/components/footer/footer.module.css"

interface FooterProps{
    children: React.ReactNode;
}

export default function Footer({children}:FooterProps){
    return <footer className={style.footer}>{children}</footer>
}
