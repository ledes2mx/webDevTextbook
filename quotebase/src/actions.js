export const Action = Object.freeze({
    SelectAuthor: 'SelectAuthor',
    AddQuotation: 'AddQuotation',
  });

  export function selectAuthor(author) {
    return {type: Action.SelectAuthor, payload: author};
  }
  
  export function addQuotation(author, text) {
    return {type: Action.AddQuotation, payload: {author, text}};
  }