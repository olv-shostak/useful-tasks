const treeRef = document.querySelector(".tree");

treeRef.addEventListener("click", (e) => {
  if (!e.target.classList.contains("tree__item")) return;

  const subTreeRef = e.target.querySelector(".tree__sub-tree");

  if (!subTreeRef) return;

  if (subTreeRef.classList.contains("tree__sub-tree_open")) {
    subTreeRef.querySelectorAll(".tree__sub-tree").forEach((tree) => {
      tree.classList.remove("tree__sub-tree_open");
    });
  }

  subTreeRef.classList.toggle("tree__sub-tree_open");
});
