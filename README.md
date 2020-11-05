## `useMemo/useCallback`

Explanation about how these two hooks work

# Similarities

-> For example, they can prevent to re-render a function using dependencies which will check if a variable has changed or not. If we use another event in the same component, it will not re-render the function where we used useCallback or useMemo. 

-> Both use referential equality meaning that they will check between renders if the variable is the same. They are compared using strict equality.

-> Both must be used with caution in order to avoid using too much cache. They are best suited in cases where a function can cause performance issues. We would use UseMemo and useCallback to avoid any unnecessary re-renderings. (Example: intersection observer api)


# Differences

UseCallback returns a function
useMemo returns a value

### `npm i => npm start`

### `Structure`

contains an "Issue" component showing bad practices

contains a "Solution" component showing a good practice with hooks
