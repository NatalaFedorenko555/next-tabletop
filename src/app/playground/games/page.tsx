import { db } from "@/db";
import { gameTable } from "@/db/schema";

const Games = async () => {
  const games = await db.select().from(gameTable);

  return (
    <div className="min-h-screen bg-emerald-300 py-12">
      <main className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-semibold text-emerald-900 mb-6">Games</h1>

        {games.length === 0 ? (
          <p className="text-emerald-900/80">No games found.</p>  
        ) : (
          <ul className="grid gap-4">
            {games.map((game) => (
              <li
                key={game.id}
                className="bg-white/90 rounded-lg shadow p-4 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-medium text-emerald-900">{game.title}</h3>
                <p className="mt-1 text-sm text-emerald-800 max-h-14 overflow-hidden">
                  {game.description}
                </p>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
};

export default Games;
