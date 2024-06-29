const toUpperCase = (word) =>
  word && typeof word === "string"
    ? word
        .split(" ")
        .map((p) =>
          p !== "" ? `${p.replace(p[0], p[0].toUpperCase())} ` : null,
        )
        .join("")
        .trim()
    : "";

module.exports = toUpperCase;
