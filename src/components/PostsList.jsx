import { useEffect, useState } from "react";
import "./PostsList.css";

function PostsList() {
    const posts = []; // TODO: zamień na stan
    const loading = false; // TODO: zamień na stan
    const error = ""; // TODO: zamień na stan

    const fetchPosts = async () => {
        // TODO:
        // Ustaw loading na true

        // TODO:
        // Wyczyść poprzedni błąd

        try {
            // TODO:
            // Pobierz dane z API:
            // https://jsonplaceholder.typicode.com/posts

            // TODO:
            // Sprawdź, czy odpowiedź jest poprawna

            // TODO:
            // Sparsuj odpowiedź do JSON

            // TODO:
            // Zapisz tylko 10 pierwszych postów do stanu
        } catch (err) {
            // TODO:
            // Zapisz błąd do stanu
        } finally {
            // TODO:
            // Zakończ loading
        }
    };

    useEffect(() => {
        // TODO:
        // Wywołaj funkcję pobierającą dane po załadowaniu komponentu
    }, []);

    return (
        <section className="posts-section">
            <div className="posts-container">
                <div className="posts-header">
                    <div>
                        <h1>Lista postów</h1>
                        <p>Pobieranie danych z API w React</p>
                    </div>

                    <button className="reload-btn">
                        Pobierz ponownie
                    </button>
                </div>

                {loading && (
                    <p className="info-message">Ładowanie danych...</p>
                )}

                {/* TODO:
            Wyświetl komunikat błędu, jeśli wystąpił */}

                {/* TODO:
            Wyświetl listę postów, jeśli dane zostały pobrane poprawnie */}

                {/* TODO:
            Użyj map() do wyrenderowania postów */}

                {/* TODO:
            W każdej karcie pokaż:
            - id posta
            - tytuł
            - treść */}
            </div>
        </section>
    );
}

export default PostsList;