export const extractModelIds = (data) => {
    const modelIds = [];
    data.forEach((model) => {
        modelIds.push(model._id);
    });
    return modelIds;
};
