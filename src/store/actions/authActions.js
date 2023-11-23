const { UPDATE_ONBOARDING_STATUS } = require("../constants");

export const updateOnboarding = (status) => {
  return {
    type: UPDATE_ONBOARDING_STATUS,
    status
  }
}

