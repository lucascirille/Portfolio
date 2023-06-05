import Github from "./icons/Github"
import Instagram from "./icons/Instagram"
import LinkedIn from "./icons/Linkedin"
import Tweeter from "./icons/Tweeter"

const SocialNetworks = ()=>{
    return(
        <>
        <ul className="SN flex flex-col fixed align-middle left-14 bottom-0">
        <li className="pb-5"><a href="https://github.com/lucascirille" aria-label="GitHub" target="_blank" rel="noreferrer">
        
        <Github/>

        </a></li>
        <li className="pb-5"><a href="https://www.instagram.com/lucas.cirille" aria-label="Instagram" target="_blank" rel="noreferrer">

        <Instagram/>

        </a></li>
        <li className="pb-5"><a href="https://twitter.com/lucas_cirille" aria-label="Twitter" target="_blank" rel="noreferrer">

        <Tweeter/>

        </a></li>
        <li className="pb-9"><a href="https://www.linkedin.com/in/lucas-cirille-5ba487240/" aria-label="Linkedin" target="_blank" rel="noreferrer">

        <LinkedIn/>

        </a></li>
    </ul>

    <div  className="fixed w-10 bottom-0 left-auto right-10 z-10 text-white"><div className="flex flex-col align-middle relative SN"><a className="my-5 mx-auto p-[10px] tracking-widest [writing-mode:vertical-rl]" href="mailto:lucas.cirille@gmail.com">lucas.cirille@gmai.com</a></div></div>
    </>
    )
}
export default SocialNetworks