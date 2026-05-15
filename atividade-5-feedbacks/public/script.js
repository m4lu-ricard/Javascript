fetch('/api/feedbacks/dados')
    .then(res => res.json())
    .then(feedbacks => {
        const lista = document.getElementById('lista-feedbacks');
        
        if (feedbacks.length === 0) {
            lista.innerHTML = '<li style="justify-content: center; color: #666;">Nenhum feedback ainda. Seja o primeiro!</li>';
            return;
        }

        feedbacks.forEach(f => {
            lista.innerHTML += `
                <li>
                    <div class="feedback-texto">
                        <strong>${f.nome}</strong>: ${f.comentario}
                    </div>
                    <form action="/api/feedbacks/remover" method="POST" style="margin: 0;">
                        <input type="hidden" name="id" value="${f.id}">
                        <button type="submit" class="btn-remover">Remover</button>
                    </form>
                </li>
            `;
        });
    });