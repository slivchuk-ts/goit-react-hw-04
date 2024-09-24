import { useState } from "react"
import { toast } from "react-hot-toast";
import s from "./SearchBar.module.css"

const SearchBar = ({ onSubmit }) => {
    const [query, setQuery] = useState('');

    const handleChange = (e) => setQuery(e.target.value);
    
    const handleSubmit = (e) => {
        e.preventDefoult();
        if (query.trim() === '') {
            toast.error('Please enter a search term.');
            return;
        }
        onSubmit(query);
        setQuery('');
    }
    return (
        <header className={s.header}>
            <form onSubmit={handleSubmit} className={s.form}>
                <input
                    type="text"
                    value={query}
                    onChange={handleChange}
                    placeholder="Search images and photos"
                    autoFocus
                    className={s.input}
                />
                <button type="submit" className={s.button}>Search</button>
            </form>
        </header>
    );
    
};

export default SearchBar;