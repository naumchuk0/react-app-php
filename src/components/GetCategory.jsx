import { useEffect, useState } from "react";
import './GetCategory.css';

export default function GetCategory() {
    
    const api = 'http://vpd111.api.com/api/categories'; 
    const[categories, setCategory] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(api);
            const data = await res.json();
            setCategory(data);
        }
        fetchData();

    }, []);

    return(
        <div id="main">
            <table>
                <tr>
                    <th className="col">#</th>
                    <th className="col">Name</th>
                    <th className="col">Image</th>
                </tr>
                {categories.map(i => <tr>
                    <td>{i.id}</td>
                    <td>{i.name}</td>
                    <td><img src={i.image} /></td>
                </tr>)}
            </table>
        </div>
    );
}