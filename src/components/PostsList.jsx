import { useEffect, useState } from "react";
import "./PostsList.css";

// ROZSZERZENIE (na 5): Osobny komponent dla pojedynczego posta
const PostCard = ({ post }) => {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <div className="post-card">
            <div className="post-id">#{post.id}</div>
            <h3>{post.title}</h3>
            {isVisible && <p>{post.body}</p>}
            {/* Dodatkowa funkcjonalność: ukrywanie treści */}
            <button onClick={() => setIsVisible(!isVisible)} className="toggle-btn">
                {isVisible ? "Ukryj treść" : "Pokaż treść"}
            </button>
        </div>
    );
};

function PostsList() {
    // Stan komponentu
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [searchTerm, setSearchTerm] = useState(""); // ROZSZERZENIE: Stan wyszukiwarki

    const fetchPosts = async () => {
        setLoading(true);
        setError(""); // Wyczyść poprzedni błąd

        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");

            // Sprawdzenie poprawności odpowiedzi
            if (!response.ok) {
                throw new Error("Wystąpił problem z pobieraniem danych.");
            }

            const data = await response.json();
            // Zapisanie tylko 10 pierwszych postów
            setPosts(data.slice(0, 10));
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    // ROZSZERZENIE: Filtrowanie postów po tytule
    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className="posts-section">
            <div className="posts-container">
                <div className="posts-header">
                    <div>
                        <h1>Lista postów</h1>
                        <p>Pobieranie danych z API w React</p>
                    </div>

                    <button className="reload-btn" onClick={fetchPosts} disabled={loading}>
                        {loading ? "Pobieranie..." : "Pobierz ponownie"}
                    </button>
                </div>

                {/* ROZSZERZENIE: Wyszukiwarka */}
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Filtruj po tytule..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                </div>

                {loading && <p className="info-message">Ładowanie danych...</p>}

                {error && <p className="error-message" style={{ color: "red" }}>Błąd: {error}</p>}

                {!loading && !error && (
                    <div className="posts-grid">
                        {filteredPosts.length > 0 ? (
                            filteredPosts.map((post) => (
                                <PostCard key={post.id} post={post} />
                            ))
                        ) : (
                            <p>Nie znaleziono postów pasujących do kryteriów.</p>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}

export default PostsList;