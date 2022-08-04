import Earth from "../img/earth.png"

export default function Header() {
    return (
        <div className="header">
            <img src={Earth} alt="Earth Icon"/>
            <h1>my travel journal.</h1>
        </div>
    )
}