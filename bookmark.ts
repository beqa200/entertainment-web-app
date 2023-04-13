export const bookMark = async (
  index: number | undefined,
  context: contextProps
) => {
  const token = localStorage.getItem("auth-token");
  if (index != undefined && token) {
    const dataClone = [...context.wholeData];
    dataClone[index].isBookmarked = !dataClone[index].isBookmarked;
    context.setWholeData(dataClone);

    await fetch(`/api/movies/${dataClone[index].id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
      body: JSON.stringify({
        isBookmarked: dataClone[index].isBookmarked,
      }),
    });
  }
};
