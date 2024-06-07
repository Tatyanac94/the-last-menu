import React from "react";

const DinnerMenu = () => (
  <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-black text-gold">
    <h1 className="mb-6 text-4xl font-cursive underline">
      The Last Supper
    </h1>
    <h2 className="mb-4 text-2xl font-cursive underline">
      Evening Dinner Menu
    </h2>
    <div className="max-w-lg mx-auto">
      <h3 className="mb-2 text-xl font-cursive underline">Appetizers</h3>
      <ul className="list- pl-6 mb-4">
        <li>Seared Scallops - Pan-seared scallops served with a delicate saffron cream sauce.</li>
        <li>Stuffed Mushrooms - Portobello mushrooms filled with herbed goat cheese and roasted to perfection.</li>
        <li>Smoked Salmon Crostini - Thinly sliced smoked salmon atop toasted baguette slices with dill cream cheese spread.</li>
      </ul>
      <h3 className="mb-2 text-xl font-cursive underline">Soup</h3>
      <p className="mb-4">Lobster Bisque - Rich and creamy lobster soup garnished with a drizzle of sherry and chives.</p>
      <h3 className="mb-2 text-xl font-cursive underline">Salad</h3>
      <p className="mb-4">Caprese Salad - Layers of ripe tomatoes, fresh mozzarella, and basil leaves drizzled with balsamic glaze.</p>
      <h3 className="mb-2 text-xl font-cursive underline">Main Course</h3>
      <ul className="pl-6 mb-4">
        <li>Filet Mignon - Grilled to perfection, served with a red wine reduction sauce.</li>
        <li>Pan-Seared Halibut - Halibut fillets seared to a golden brown, accompanied by a citrus beurre blanc.</li>
        <li>Vegetable Wellington - Seasonal vegetables wrapped in puff pastry, served with a tangy tomato coulis.</li>
      </ul>
      <h3 className="mb-2 text-xl font-cursive underline">Sides</h3>
      <ul className="pl-6 mb-4">
        <li>Truffle Mashed Potatoes - Creamy mashed potatoes infused with black truffle oil and topped with chives.</li>
        <li>Grilled Asparagus - Fresh asparagus spears lightly seasoned and grilled to tender perfection.</li>
        <li>Wild Mushroom Risotto - Arborio rice cooked with a medley of wild mushrooms and finished with Parmesan cheese.</li>
      </ul>
      <h3 className="mb-2 text-xl font-cursive underline">Dessert</h3>
      <ul className="pl-6 mb-4">
        <li>Chocolate Lava Cake - Decadent chocolate cake with a molten chocolate center, served with vanilla bean ice cream.</li>
        <li>Crème Brûlée - Creamy vanilla custard topped with a caramelized sugar crust.</li>
        <li>Assorted Fruit Tartlets - Miniature tartlets filled with seasonal fruits and pastry cream, topped with a glaze.</li>
      </ul>
      <h3 className="mb-2 text-xl font-cursive underline">Beverages</h3>
      <p className="mb-4">A curated selection of red and white wines, signature cocktails, and non-alcoholic options are available to complement your meal.</p>
    </div>
  </div>
);

export default DinnerMenu;
