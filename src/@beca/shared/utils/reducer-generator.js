export const reducerGenerator = (arrActions) => {
  return arrActions.reduce(
    (acc, curr) => ({
      ...acc,
      [curr.action.fulfilled]: curr.key === "save" ? save : fulfilled(curr),
      [curr.action.pending]: loading(curr),
      [curr.action.rejected]: rejected(curr),
    }),
    {}
  );
};

const save = (state, { payload: { payload, id } }) => {
  const allData = state.all.data;
  const all = id
    ? allData.filter((institution) => parseInt(institution.id) !== parseInt(id))
    : allData;
  return {
    ...state,
    all: {
      data: [payload, ...all],
      status: "completed",
    },
    save: {
      data: payload,
      status: "completed",
    },
    one: {
      data: payload,
      status: "completed",
    },
  };
};

const fulfilled =
  (curr) =>
  (state, { payload: data }) => ({
    ...state,
    [curr.key]: {
      data,
      status: "completed",
    },
  });

const loading = (curr) => (state, _) => ({
  ...state,
  [curr.key]: {
    ...state[curr.key],
    status: "loading",
  },
});

const rejected = (curr) => (state, _) => ({
  ...state,
  [curr.key]: {
    ...state[curr.key],
    status: "error",
  },
});
