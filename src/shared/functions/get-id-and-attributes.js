function getIdAndAttributes(obj) {
  if (obj == null) return null;
  const { id, ...attributes } = obj;
  const result = {
    id,
    attributes: {},
  };
  for (const [key, value] of Object.entries(attributes)) {
    if (
      typeof value === "object" &&
      value !== null &&
      !(value instanceof Array)
    ) {
      result.attributes[key] = getIdAndAttributes(value);
    } else {
      result.attributes[key] = value;
    }
  }
  return result;
}

function getIdAndAttributesSimple(obj) {
  if (obj == null) return null;
  const { id, ...attributes } = obj;
  return {
    id,
    attributes,
  };
}

module.exports = {
  getIdAndAttributes,
  getIdAndAttributesSimple,
};
