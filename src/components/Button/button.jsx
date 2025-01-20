import './button.css'

export function Button({href, text}){
    
    return (
        <a target='_blank' href={href}>
            <button>
        {text}             
            </button>
            </a>
        
    )
}
