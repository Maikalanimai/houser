let initialState = {
  name: "",
  address: "",
  city: "",
  province: "",
  zip: "",
  img: "",
  mortgage: null,
  rent: null
};

//const TYPE = 'TYPE'
const UPDATE_NAME = "UPDATE_NAME";
const UPDATE_ADDRESS = "UPDATE_ADDRESS";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_STATE = "UPDATE_STATE";
const UPDATE_ZIP = "UPDATE_ZIP";
const UPDATE_IMG = "UPDATE_IMG";
const UPDATE_MORTGAGE = "UPDATE_MORTGAGE";
const UPDATE_RENT = "UPDATE_RENT";
//exports
export const updateName = name => {
  return { type: UPDATE_NAME, payload: name };
};

export const updateAddress = address => {
  return { type: UPDATE_ADDRESS, payload: address };
};

export const updateCity = city => {
  return { type: UPDATE_CITY, payload: city };
};

export const updateProvince = province => {
  return { type: UPDATE_STATE, payload: province };
};

export const updateZip = zip => {
  return { type: UPDATE_ZIP, payload: zip };
};

export const updateImg = img => {
  return { type: UPDATE_IMG, payload: img };
};

export const updateMortgage = mortgage => {
  return { type: UPDATE_MORTGAGE, payload: mortgage };
};

export const updateRent = rent => {
  return { type: UPDATE_RENT, payload: rent };
};

function reducer(state = initialState, action) {
  switch (action.type) {
    //switch per case
    case UPDATE_NAME:
      return { ...state, name: action.payload };
    case UPDATE_ADDRESS:
      return { ...state, address: action.payload };
    case UPDATE_CITY:
      return { ...state, city: action.payload };
    case UPDATE_STATE:
      return { ...state, province: action.payload };
    case UPDATE_ZIP:
      return { ...state, zip: action.payload };
    case UPDATE_IMG:
      return { ...state, img: action.payload };
    case UPDATE_MORTGAGE:
      return { ...state, mortgage: action.payload };
    case UPDATE_RENT:
      return { ...state, rent: action.payload };
    default:
      return state;
  }
}

export default reducer;
