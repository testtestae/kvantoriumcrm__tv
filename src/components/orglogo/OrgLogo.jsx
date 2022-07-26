import logo from './orgLogo/logo-kvantorium-square.png'

export default function OrgLogo () {
    return(
        <div className="org_logo">
            <img style={{'max-height': '100%', 'max-width': '100%'}} src={logo} alt="logo"/>
        </div>
    )
}