let isCalled = false
let timer
export const preventDoubleClick = (functionTobeCalled, interval = 1000) => {
    if (!isCalled) {
        isCalled = true
        clearTimeout(timer)
        timer = setTimeout(() => {
            isCalled = false
        }, interval)
        return functionTobeCalled()
    }
}