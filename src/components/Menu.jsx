import './Menu.css';
import { Link } from "react-router-dom";


export default function Menu() {
    return (
        <div>
            <header>
                <nav>
                    <Link className='link' to="/">Get Categories</Link>
                    <Link className='link' to="/create">Create Category</Link>
                </nav>
            </header>
        </div>
    );
}