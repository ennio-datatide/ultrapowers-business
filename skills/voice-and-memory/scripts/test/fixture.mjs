// A small ChatGPT export with the real shape: a mapping of nodes, a branch that was abandoned, an
// image part, a correction and an approval.
const node = (id, parent, role, text, t, children = []) => ({
  id,
  parent,
  children,
  message: role ? { author: { role }, create_time: t, content: { content_type: "text", parts: Array.isArray(text) ? text : [text] } } : null,
});

export const conversations = [
  {
    id: "abc123def",
    title: "Lanzamiento curso nutrición",
    create_time: 1760000000,
    current_node: "m6",
    mapping: {
      root: node("root", null, null, null, null, ["s"]),
      s: node("s", "root", "system", "", 1760000000, ["m1"]),
      m1: node("m1", "s", "user", "Escríbeme el email de apertura del lanzamiento", 1760000001, ["m2"]),
      m2: node("m2", "m1", "assistant", "¡Hola! En el mundo actual, la nutrición es clave...", 1760000002, ["m3", "x3"]),
      x3: node("x3", "m2", "user", "rama abandonada", 1760000003, []),
      m3: node("m3", "m2", "user", "Demasiado formal, más cercano y sin emojis", 1760000004, ["m4"]),
      m4: node("m4", "m3", "assistant", "Oye, ¿te cuesta comer bien entre semana? Abro plazas hoy.", 1760000005, ["m5"]),
      m5: node("m5", "m4", "user", "Perfecto, así sí", 1760000006, ["m6"]),
      m6: node("m6", "m5", "assistant", ["Me alegro.", { content_type: "image_asset_pointer" }], 1760000007, []),
    },
  },
  {
    id: "zzz999",
    title: "Receta de lentejas",
    create_time: 1700000000,
    current_node: "a2",
    mapping: {
      a1: node("a1", null, "user", "¿Cómo hago lentejas?", 1700000001, ["a2"]),
      a2: node("a2", "a1", "assistant", "Con chorizo.", 1700000002, []),
    },
  },
];
