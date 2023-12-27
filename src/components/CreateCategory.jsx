import "./CreateCategory.css";

export default function CreateCategory() {
    return (
        <div>
            <h1>Create Category</h1>
            <form>
                <div id="create-form">
                    <input class="input-form" type="text" placeholder="Name" />
                    <input class="input-form" type="file" placeholder="Image" />
                    <button class="btn" type="submit">Confirm</button>
                </div>
            </form>
        </div>
    );
}