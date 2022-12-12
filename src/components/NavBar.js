export function Navbar() {
    return (
    <ul className="nav nav-pills">
        <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Search</a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">By categories</a></li>
                <li><a className="dropdown-item" href="#">By area</a></li>
                <li><a className="dropdown-item" href="#">By ingredients</a></li>
            </ul>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">My favourites</a>
        </li>
    </ul>

    );

}