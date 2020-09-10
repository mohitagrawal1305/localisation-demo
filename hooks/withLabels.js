
export const withLabels = ( labels ) => {
    return {
        t: ( key ) => {
            return labels[ key ] || key;
        }
    };
};