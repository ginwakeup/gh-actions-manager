export default function Branch({branch, onClick}) {
    return (
        <li>
            <button className="dropdown-item" onClick={() => {
                onClick(branch);
            }}>{branch.name}>Action
            </button>
        </li>
    )
}