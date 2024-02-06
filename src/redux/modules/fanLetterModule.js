export const SelectedArtistName = "SelectedArtistName";

export const selectedArtistName = (artist) => {
  return { type: SelectedArtistName, payload: { SelectedArtistName: artist } };
};

const initialState = {
  selectedArtistName: "IU",
};

const HeaderArtistSelection = (state = initialState, action) => {
  switch (action.type) {
    case "IU":
      return {
        selectedArtistName: "IU",
      };
    case "SIA":
      return {
        selectedArtistName: "SIA",
      };
    case "Eminem":
      return {
        selectedArtistName: "Eminem",
      };
    case "Selena Gomez":
      return {
        selectedArtistName: "Selena Gomez",
      };
    default:
      return state;
  }
};

export default HeaderArtistSelection;
