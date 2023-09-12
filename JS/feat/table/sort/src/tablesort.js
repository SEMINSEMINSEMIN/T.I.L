/**
 * Sorts a HTML table
 *
 * @param {HTMLTableElement} table The table to sort
 * @param {number} column The index of the column to sort
 * @param {*} asc Determines if ther sorting will be in ascending
 */

function sortTableByColumn(table, column, asc = true) {
  const dirModifier = asc ? 1 : -1;

  // The HTMLTableElement.tBodies read-only property returns a live "HTMLCollection" of the bodies in a <table>.
  // HTMLCollection vs NodeList: https://merrily-code.tistory.com/212
  const tBody = table.tBodies[0];

  // Array.from: NodeList 대신 배열로 받음. 정렬 작업시 되게 중요한 과정!
  const rows = Array.from(tBody.querySelectorAll("tr"));

  // Sort each row
  // a, b: single table row element
  const sortedRows = rows.sort((a, b) => {
    const aColText = a
      .querySelector(`td:nth-child(${column + 1})`)
      .textContent.trim();
    const bColText = b
      .querySelector(`td:nth-child(${column + 1})`)
      .textContent.trim();

    return aColText > bColText ? 1 * dirModifier : -1 * dirModifier;
  });

  // Removing all existing TRs from the table
  while (tBody.firstChild) {
    tBody.removeChild(tBody.firstChild);
  }

  // Re-add the newly sorted rows
  tBody.append(...sortedRows);
}

document.querySelector("button").addEventListener("click", () => {
  sortTableByColumn(document.querySelector("table"), 1, true);
});
