import { db } from "@/db";
import { gameTable } from "@/db/schema";

const Games = async () => {
  const games = await db.select().from(gameTable);

  return (
    <div className="min-h-screen bg-emerald-300 py-12">
      <main className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-semibold text-emerald-900 mb-6">Games</h1>

        <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((game) => (
            <li
              key={game.id}
              className="bg-white rounded-lg shadow-sm p-5 hover:shadow-md transition-shadow duration-150"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2 truncate">
                {game.title}
              </h3>
              <p
                className="text-sm text-gray-600 overflow-hidden"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {game.description}
                </p>

        
              </li>
            ))}
          </ul>
        
      </main>
    </div>
  );
};

export default Games;
