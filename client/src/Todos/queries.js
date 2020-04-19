export const READ_TODOS = `
  query todos {
    todos {
      id
      text
      completed
    }
  }
`;

export const CREATE_TODO = (text) => `
  mutation {
    createTodo(text: "${text}") {
      id
      text
      completed
    }
  }
`;

export const REMOVE_TODO = (id) => `
  mutation {
    removeTodo(id: "${id}")
  }
`;

export const UPDATE_TODO = (id) => `
  mutation {
    updateTodo(id: "${id}")
  }
`;
