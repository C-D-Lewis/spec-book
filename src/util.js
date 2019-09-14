/**
 * Extract categories used for building the left hand menu.
 *
 * @param {object} spec - The spec object.
 * @returns {object[]} Array of items containing name, operation, path, and method.
 */
const extractCategories = (spec) => {
  const categories = [];
  Object.entries(spec.paths).forEach(([path, pathObj]) => {
    Object.entries(pathObj).forEach(([method, operation]) => {
      let foundSection = categories.find(p => p.name === operation.tags[0]);
      if (!foundSection) {
        foundSection = { name: operation.tags[0], operations: [] };
        categories.push(foundSection);
      }

      foundSection.operations.push(Object.assign({}, operation, { path, method }));
    });
  });
  return categories;
};

const Util = {
  extractCategories,
};

export default Util;
