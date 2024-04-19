export default function Home() {
  return (
    <div>
      <h1 className="text-center">
        Bienvenue sur{" "}
        <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
          THE BEST PLACES
        </mark>
      </h1>
      <p className="py-4">
        Découvrez les meilleurs endroits à visiter dans le monde entier.
      </p>
      <p className="py-4">
        <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
          THE BEST PLACES
        </mark>{" "}
        est une application web qui vous permet de créer, modifier et supprimer
        des lieux à visiter.
      </p>
      <p>Voici les dernieres places ajoutées</p>
    </div>
  );
}
