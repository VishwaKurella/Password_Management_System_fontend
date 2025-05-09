const BACKEND_URI = process.env.BACKEND_URI;

export const updateName = async ({ name }) => {
  return { success: true }; // Simulate success
};

export const updateEmail = async ({ email }) => {
  return { success: true };
};

export const updatePassword = async ({ currentPassword, newPassword }) => {
  return { success: true };
};

export const deleteAccount = async () => {
  return { success: true };
};

export const userDetails = async () => {
  try {
    // let res = fetch(`${BACKEND_URI}/auth/authenticate`, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   credentials: "include",
    //   cache: "no-store",
    // });
    // const result = await res.json();

    // if (!res.ok || !result.success) {
    //   throw new Error(result.message || "Failed to create user");
    // }
    // return parseStringify(result);
    return {
      success: true,
      is_expired: false,
    };
  } catch (e) {
    console.log(e);
    return new Error("Server error, please try again.");
  }
};
