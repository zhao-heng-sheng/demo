const isExisted = (id) => id % 3 === 0;

const getUser = (id) => {
    if (isExisted(id)) {
        return { id: id, nickName: String(id).slice(0, 3) };
    } else {
        throw new Error("User not found");
    }
};

const getUserSafely = (id) => {
    try {
        const userInfo = getUser(id);
        return Maybe(userInfo);
    } catch (e) {
        return Maybe(null);
    }
};

const res = getUserSafely(1110021)