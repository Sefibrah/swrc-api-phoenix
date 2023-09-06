function getIdAndAttributes(obj) {
  if (obj == null) return null;
  const { id, ...attributes } = obj;
  const result = {
    id,
    attributes: {},
  };
  for (const [key, value] of Object.entries(attributes)) {
    if (typeof value === "object" && value !== null) {
      result.attributes[key] = getIdAndAttributes(value);
    } else {
      result.attributes[key] = value;
    }
  }
  return result;
}

module.exports = {
  getIdAndAttributes,
};
