
export const init = () => {
    return JSON.parse( localStorage.getItem('todos') ) || [];
}