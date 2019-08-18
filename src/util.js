/**
 * Extract sections used for building the left hand menu.
 *
 * @param {object} spec - The spec object.
 * @returns {object[]} Array of items containing name, operation, path, and method.
 */
const extractSections = (spec) => {
  const sections = [];
  Object.entries(spec.paths).forEach(([path, pathObj]) => {
    Object.entries(pathObj).forEach(([method, operation]) => {
      let foundSection = sections.find(p => p.name === operation.tags[0]);
      if (!foundSection) {
        foundSection = { name: operation.tags[0], operations: [] };
        sections.push(foundSection);
      }

      foundSection.operations.push(Object.assign({}, operation, { path, method }));
    });
  });
  return sections;
};

const Util = {
  extractSections,
};

export default Util;
