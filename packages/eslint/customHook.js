const reactQueryList = ['useQuery', 'useMutation', 'useInfiniteQuery'];

const onCustomHook = (context) => {
  return {
    CallExpression(node) {
      const { callee } = node;
      if (
        callee.type === 'Identifier' &&
        reactQueryList.includes(callee.name) &&
        node.parent.type === 'VariableDeclarator'
      ) {
        context.report({
          node,
          message: `Use custom hook instead of direct use of ${callee.name}.`,
        });
      }
    },
  };
};

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Enforce usage of custom hook instead of direct use of react query',
      category: 'Best Practices',
      recommended: true,
    },
    hasSuggestions: true,
  },
  onCustomHook,
};
